export default class AviaService {
  
  _apiBase = 'https://front-test.beta.aviasales.ru';
  _apiTickets = '/tickets?searchId=';
  
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    
    if(!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}${url}, received ${res.status}`)
    }
    return await res.json();
  }
  
  getTickets = async () => {
    const resSearchId = await this.getResource('/search');
    const resTickets = await this.getResource(`${this._apiTickets}${resSearchId.searchId}`); 
    return resTickets.tickets.map(this._transformTickets).slice(0, 5);
  }
  
  getDepartureTime (date) {
    return date.match(/\d\d:\d\d/);
  }
  
  getArrivalTime (start, total) {
    const h1 = start[0].replace(/[^\d]/g, '').slice(0,2);
    const m1 = start[0].replace(/[^\d]/g, '').slice(2);
    const m2 = total % 60;
    const h2 = (total - m2)/60;
    const mF = ((m1+m2)%60) === (m1+m2) ? m1+m2 : (m1+m2)%60; 
    const m3 = ((m1+m2)%60) === (m1+m2) ? 0 : ((m1+m2)-((m1+m2)%60))/60;
    const hF = ((h1+h2)%24)+m3;
    
    return `${hF}:${mF}`;
  }
  
  getStops (arr) {
    if(arr.length === 0) {
      return '-';
    } 

    return arr.join(' ');
  }
  
  getStopsCount (arr) {
    const count = arr.length;
    switch(count) {
      case 0:
        return `${count} пересадок`;
        break;
      case 1:
        return `${count} пересадка`;
        break;
      case 2:
      case 3:
      case 4:
        return `${count} пересадки`;
        break;
      default:
        return `${count} пересадок`;
    };
  }
  
  getDuration (time) {
    const m = time % 60;
    const h = (time - m)/60;
    return `${h}ч ${m}м`
  }
  
  _transformTickets = (ticket) => {
    return {
      price: ticket.price,
      originFrom: ticket.segments[0].origin,
      destinationFrom: ticket.segments[0].destination,
      dateFrom: this.getDepartureTime(ticket.segments[0].date),
      
      dateArrivalFrom: this.getArrivalTime(this.getDepartureTime(ticket.segments[0].date), ticket.segments[0].duration),
      
      stopsFrom: this.getStops(ticket.segments[0].stops),
      stopsFromCount: this.getStopsCount(ticket.segments[0].stops),
      durationFrom: this.getDuration(ticket.segments[0].duration),

      originTo: ticket.segments[1].origin,
      destinationTo: ticket.segments[1].destination,
      dateTo: this.getDepartureTime(ticket.segments[1].date),
      
      dateArrivalTo: this.getArrivalTime(this.getDepartureTime(ticket.segments[1].date), ticket.segments[1].duration),
      
      stopsTo: this.getStops(ticket.segments[1].stops),
      stopsToCount: this.getStopsCount(ticket.segments[1].stops),
      durationTo: this.getDuration(ticket.segments[1].duration)
    } 
  }
}