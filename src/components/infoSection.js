import React from "react";
import Information from "./Information";

const InfoSection = () => {

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    return (
        <div className="info-section">
            <Information 
              infoName="Informations Dossier"
              title="Dossier n 6926"
              name1={`Cree le: ${currentDate} ${currentTime}`}
              name2="Facture n: 6971"
              name3="Montant Facture: 210.00 e"
              name4="SOLDE (differes inclus): 0.00 e"
              btnName="Changer Date" 
            />
              <Information 
              infoName="Info Clients"
              title="Dossier n 6926"
              name1={`Cree le: ${currentDate} ${currentTime}`}
              name2="Facture n: 6971"
              name3="Montant Facture: 210.00 e"
              name4="SOLDE (differes inclus): 0.00 e"
              name5= "Terifs:"
              btnName="Changer Client" 
            />
              <Information 
              infoName="Informations Groupage"
              title="Dossier n 6926"
              name1={`Cree le: ${currentDate} ${currentTime}`}
              name2="Facture n: 6971"
              name3="Montant Facture: 210.00 e"
              name4="SOLDE (differes inclus): 0.00 e"
              btnName="Changer" 
            />
        </div>
    )
}

export default InfoSection;
