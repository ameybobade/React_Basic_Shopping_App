import './Purchase_Date.css';
const Purchase_Date=({purchaseDate})=>
{
    const day = purchaseDate.getDate();
    const year = purchaseDate.getFullYear();
    const month = purchaseDate.toLocaleDateString("en-us",{month:"long"});
    return(
         <div>
          <div className="purchase-date">
              <div className="purchase-date_day"> {day}</div>
              <div className="purchase-date_month">{month} </div>
              <div className="purchase-date_year"> {year}</div>
          </div>
         </div>
    )
}
export default Purchase_Date;