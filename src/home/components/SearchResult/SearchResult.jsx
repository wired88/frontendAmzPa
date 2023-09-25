import ProductElement from "./productElement.jsx";

function SearchResult() {
  return(
    <>
    <div className={"searchResultMain"}>
      <div className={"searchResultHeader"}>
        <h3>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Amazon's top rated offers for ###Search+Result### in MONTH YEAR ...
        </h3>
        <p>
          placeholder for some text!!!!
        </p>
      </div>
      <div className={"searchResultContent"}>
        <ProductElement number={"1"} style={{gridRow: "1"}} />
        <ProductElement number={"2"} style={{gridRow: "2"}} />
        <ProductElement number={"3"} style={{gridRow: "3"}}/>
        <ProductElement number={"4"} style={{gridRow: "4"}}/>
        <ProductElement number={"5"} style={{gridRow: "5"}}/>
        <ProductElement number={"6"} style={{gridRow: "6"}}/>
        <ProductElement number={"7"} style={{gridRow: "7"}}/>
        <ProductElement number={"8"} style={{gridRow: "8"}}/>
        <ProductElement number={"9"} style={{gridRow: "9"}}/>
        <ProductElement number={"10"} style={{gridRow: "10"}}/>
      </div>
    </div>
      <div className={"infoTextContentPage"}>
        <p>
          Wichtige Informationen:
Wir erhalten ggf. eine Provision, falls Sie einen Kauf über die Links auf unserer Seite tätigen.
          Dies hat keine Auswirkungen auf die Platzierung der Produkte auf unserer Seite. Unsere Seite arbeitet mit dem Amazon EU Partner-/Affiliateprogramm zusammen. Amazon, Amazon Prime, das Amazon Logo and Amazon Prime Logo sind eingetragene Warenzeichen von Amazon, Inc. oder dessen Partnern.

Bitte beachten Sie zudem folgende wichtige Hinweise:
1. Der angezeigte Preis könnte seit der letzten Aktualisierung gestiegen sein.
2. Der Verkauf erfolgt zu dem Preis, den der Verkäufer zum Zeitpunkt des Kaufs auf seiner Website für das Produkt angibt.
3. Es ist technisch nicht möglich, die angezeigten Preise in Echtzeit zu aktualisieren.

Fussnoten:
          {/* eslint-disable-next-line react/no-unescaped-entities */}
* der ggf. verwendete Ausdruck "Beste" u.ä. bezieht sich nur auf unsere ggf. subjektive persönliche Meinung.
          {/* eslint-disable-next-line react/no-unescaped-entities */}
** "Kostenfreie Lieferung" bedeutet, dass dies unter gegebenen Voraussetzungen zum Zeitpunkt des Datenabrufs vom entsprechenden Anbieter möglich ist, aber nicht garantiert werden kann. Eine Angabe in Echtzeit ist technisch nicht möglich. Die Versandkosten können unter bestimmten Umständen (abweichender Anbieter, Lieferort etc.) unterschiedlich sein. Es gelten die letztendlich im weiteren Bestellprozess angezeigten Versandkosten.
        </p>
      </div>
    </>
  );
}
export default SearchResult;