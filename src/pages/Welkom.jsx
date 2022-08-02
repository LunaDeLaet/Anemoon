import React from "react"
import { Link } from "react-router-dom"


const Welkom = () => {
  return (
    <div>
            <div className="info">
                <h1>Anemoon multidisciplinair psychodiagnostisch & therapiecentrum</h1>
                <h2>Kinder- en jeugdpsychiatrie, therapie & coaching</h2>
                <h3>Wilrijk/Antwerpen</h3>
            </div>

            <div className="afspraak">
            <Link to="/Contact">
                <button className="button" type="submit">Maak een afspraak</button>
            </Link>
            </div>

            <div className="quote cursive">
                <blockquote>"Als je vertrouwen hebt, hoef je niet de gehele trap te zien om de eerste stap te zetten"</blockquote>
                <p>Martin Luther King</p>
            </div> 
            <div className="covid" > 
            <Link to="/Contact">
                <button className="button"type="submit"><i className="fa-solid fa-virus-covid-slash"></i> Onze covid-19 maatregelingen</button>
            </Link>
            </div>

            <div className="info2">
                <h2>Onze visie & missie:</h2>
                <p>Ons multidisciplinair team benadert het kind/de jongere en volwassene graag in al zijn aspecten. Naast het stellen van een multidisciplinair diagnose is het bieden van zorg op maat onze belangrijkste doelstelling.</p>
                <h2>Ons multidisciplinair team bestaat uit:</h2>
                <ul>
                    <li>Kinder- en jeugdpsychiater</li>
                    <li>Klinisch psychologen, psychologisch consulenten, orthopedagogen</li>
                    <li>Psychotherapeuten; o.a. EMDR therapeuten, CGT'en, mindfulness & ACT therapeut, hypnosetherpeut,...</li>
                    <li>Coachen en counselors; o.a. studiecoach, auticoach, HSP coach, Life coach, kindercoach, hartcoherentie coach, rots en water trainer, loopbaancoach, mental coach, sport en motivatiecoach, stress & burnout coach, cogmed werkgeheugen trainer/coach, leerkracht typ 10, ...</li>
                    <li>Kinesist, osteopaat</li>
                    <li>Diëtiste</li>
                </ul>
                <h2>In ons centrum hebben we subteams die gespecialiseerd zijn rond:</h2>
                <ul>
                    <li>(Psycho)diagnostiek onderzoeken: o.a. Autisme/ASS, ADHD/ADD/aandachtonderzoek, intelligentie/IQ onderzoek, psychomotoriek onderzoek, belevingsonderzoek,....</li>
                    <li>Ontwikkelingsstoornissen o.a. Autisme/Autisme sprectrum stoornis (ASS), Attention deficit hyperactivity disorder (ADHD), Ticstoornis/Gilles de la Tourette, </li>
                    <li>Developmental Coordination Disorder (DCD)/coördinatie- ontwikkelingsstoornis, leerstoornissen,...,</li>
                    <li>Posttraumatische stressstoornis (PTSS)</li>
                    <li>Eetstoorissen zoals Anorexia Nervosa (AN), Boulimia nervosa (BN),...</li>
                    <li>(Groeps)trainingen</li>
                    <li>Gezinsbegeleiding</li>
                    <li>Taalkampen</li>
                    <li>Cogmed werkgeheugentraining</li>
                    <li>Hertcoherentie</li>
                    <li>Rots en water training</li>
                    <li>...</li>
                </ul>
                <div className="teams">
                    <Link className="team" to="/Team-Wilrijk">
                        <button className="button" type="submit"> Team Anemoon</button>
                    </Link>
                    <Link className="team" to="/gespecialiseerde-subteams">
                        <button className="button" type="submit"> Gespecialiseerde subteams</button>
                    </Link>
                </div>
            </div>

            <div className="info">
                <p>Anemoon groepspraktijk Wilrijk bevindt zich in Prins Boudewijnlaan 347, 2610 Wilrijk.
                    <br />Het is gelegen op de grens met Edegem, Berchem Duffel en Rumst, en is op slechts enkele kilometers verder van  Antwerpen centrum, Mortsel, Boom, Lier, Boechout en Mechelen.</p>
            </div>
    </div>
  )
}

export default Welkom