import React from "react";
import './Form.css'

const Form = () => {
    return (
        <div>
            <div className="form-title">Dossier Groupage TIPAN</div>
            <form>
                <div className="first-inputs">
                    <div className="inputs-div">
                    <label htmlFor="shipper">Shipper:</label>
                    <input type="text" id="shipper" name="shipper"required />
                    </div>
                    <div className="inputs-div">
                    <label htmlFor="cnee_notify">CNEE/NOTIFY:</label>
                    <input type="text" id="cnee_notify" name="cnee_notify"  required />
                    </div>
                </div>
                
                <div className="second-inputs">
                <div >
                    <label htmlFor="options" className="nova">Novier Merchandise:</label>
                    <select id="options" name="options">
                        <option value="novier_merchandise" >Select</option>
                    </select>
                </div>

                <div >
                <label htmlFor="neuf">Neuf:</label>
                    <input type="checkbox" id="neuf" name="neuf" />
                </div>

                <div>
                    <label htmlFor="nb">Nb:</label>
                    <input type="text" id="nb" name="nb" />
                </div>
                <div>
                    <label htmlFor="valuer">Valuer (£):</label>
                    <input type="text" id="valuer" name="valuer" />
                </div>
                <div>
                    <label htmlFor="poids">Poids:</label>
                    <input type="text" id="poids" name="poids" />
                </div>
                <div>
                    <label htmlFor="volume">Volume:</label>
                    <input type="text" id="volume" name="volume" />
                </div>
                <div>
                    <label htmlFor="mode">Mode:</label>
                    <input type="text" id="mode" name="mode"  className="yellow"/>
                </div>
                <div>
                    <label htmlFor="pu" >PU (£):</label>
                    <input type="text" id="pu" name="pu" className="yellow"/>
                </div>
                <div>
                    <label htmlFor="pt" >PT (€):</label>
                    <input type="text" id="pt" name="pt" className="yellow"/>
                </div>

                </div>
    
             <div class="desc-div">
                <div class="label-textarea">
                    <label htmlFor="descriptif">Descriptif:</label>
                    <textarea id="descriptif" name="descriptif"></textarea>
                </div>
                <div class="button-div">
                    <button type="submit">Creer</button>
                    <button type="reset">Annuler saisei</button>
                </div>
            </div>
                
          
            <div className="table-one">
                <h2 className="one-title">Details Groupage Saisis</h2>
                <div    className="table-div">
                <table>
                    <thead>
                        <tr>
                            <th>Nature</th>
                            <th>Descriptif</th>
                            <th>No</th>
                            <th>Valuer</th>
                            <th>Poids</th>
                            <th>Vol</th>
                            <th>Facturation</th>
                            <th>Pu</th>
                            <th>Cout Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Colis</td>
                            <td>Electromenager d'occassion et veterment d'occassion</td>
                            <td>3.00</td>
                            <td>190.00</td>
                            <td>150.00</td>
                            <td>1.00</td>
                            <td>Volume</td>
                            <td>180.00</td>
                            <td>180.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                
            </div>

            <div className="middle-table">
            <h2 className="middle-title">Frais et remises exceptionnelles</h2>
            <div className="table-box">
                <div className="type">Type</div>
                <div className="montant">Montant</div>
                <div className="custom-select">
                 <button className="arrow-up" disabled >▲</button>
                    <span className="selected-option">Commentaire</span>
                <button className="arrow-down">▼</button>
                 </div>
             </div>
             <div className="btn-container">
             <div className="button-box">
               <button>Ajout Fraise</button>
               <button>Ajout Remise</button>
            </div>
           <div className="image-box">
            <div style={{ width: '100px', height: '80px', backgroundColor: 'rgb(235, 235, 7)' }}></div>
          </div>
          </div>
             </div>

            <div className="last-table">
        <table>
            <caption className="caption">Encaissements</caption>
        <thead>
             <tr>
            <th>Mode de reglement</th>
            <th>Commentaire</th>
            <th>Compte</th>
            <th>Date</th>
            <th>Montant</th>
            <th>Par</th>
             </tr>
        </thead>
        <tbody>
            <tr>
            <td>Especes</td>
            <td>{'            '}</td> 
            <td>LCL Z</td>
            <td>11/01/16</td>
            <td>210.00 E</td>
            <td>CED</td>
            </tr>
        </tbody>
       </table>

       <div className="last-buttons">
        <div className="left">
    <label className="check-last">
      <input type="checkbox" /> Reglement
    </label>
  </div>
  <div className="mid-btns">
    <button>Ajout Encaissements</button>
    <button className="hard-btn">Creer Avoir</button>
  </div>
  <div className="right">
    <button>Enregister</button>
    <button>Quiter Dossier</button>
  </div>
</div>

            </div>

            <div className="two-button">
                <button>imprimer recu</button>
                <button>imprimer facture</button>
            </div>
            <div className="three-buttons">
            <button>imprimer recu</button>
                <button>imprimer facture</button>
                <button>imprimer facture</button>
            </div>
        </form>
     </div>
    );
};

export default Form;
