const palavras = [
    //ista
    ["Cubista","Docista","Domista","Eudista","Eupista","Fujista","Fulista","Fumista","Gasista","Genista","Darbista","Duchista","Ebanista","Ebenista","Ecopista","Elegista","Elogista","Emanista","Eranista","Erotista","Decadista","Demonista","Dibatista","Droguista","Ecletista","Enigmista","Escapista","Esferista","Esnobista","Espadista","Damianista","Demandista","Desandista","Despesista","Despotista","Dietetista","Dravidista","Duopolista","Durantista","Ecloguista","Demagogista","Desnortista","Desumanista","Diamantista","Dictiocista","Dinamitista","Discursista","Enderecista","Epigramista","Escrachista","Cromotipista","Debenturista","Decadentista","Decatlonista","Diletantista","Economicista","Egitologista","Emergencista","Emigrantista","Entremezista","Curandeirista","Deflacionista","Demissionista","Demonologista","Dendrologista","Deontologista","Desarranjista","Dramaturgista","Ecoterrorista","Entrelinhista","Deuteronomista","Dogmatologista","Dramatologista","Electrocopista","Estrangeirista","Fisiocientista","Indeterminista","Indiferentista","Infeciologista","Abstencionista","Curtametragista","Geocronologista","Geomorfologista","Hidromassagista","Inconfidencista","Abrilhantadista","Antidesportista","Antidreyfusista","Antimonopolista","Basquetebolista","Desinflacionista","Espectroscopista","Fotominiaturista","Imunopatologista","Agroextrativista","Antiaborcionista","Antiarmamentista","Arquiparafonista","Clavicordionista","Compensacionista","Fotocromometrista","Antiabolicionista","Miscigenacionista","Quintimonarquista","Radiomicranalista","Requerimentarista","Superespecialista","Radiomicroanalista","Simplificacionista","Cromotipogravurista","Cromoxilogravurista","Cromofotogravurista","Cromolitogravurista","Cromozincogravurista","Quimiobacteriologista","Cromosilostereotipista","Cromofototipogravurista","Cromozincolitogravurista","Cromozincotipogravurista","Cromofotozincogravurista"],
    //ata
    ["Democrata","Diplomata","Dulocrata","Duplicata","Empasmata","Enxaguata","Erotópata","Espérmata","Eurocrata","Crotoniata","Demonopata","Dendróbata","Discursata","Epicáumata","Escalinata","Esparciata","Estilobata","Fisiócrata","Gastrópata","Egiptógnata","Ergatocrata","Estereóbata","Gariofilata","Gimnocerata","Ginecócrata","Granucômata","Icuzulapata","Improvisata","Aeridrópata","Escravocrata","Estratócrata","Gerontócrata","Hierogramata","Abdominópata","Aeroidropata","Amigdalopata","Bibliopirata","Canalhocrata","Cienciocrata","Disalelógnata","Eletromeopata","Endocrinópata","Episcopócrata","Burguesocrata","Coronariópata","Intercolunata","Linfadenopata","Miocardiopata","Simpaticópata","Disabsortopata","Electromeopata","Hidrocroconata","Linfoadenopata","Neuropsicopata","Ponofisiócrata","Angiocardiopata","Aristodemocrata","Sincategoremata","Socialdemocrata"],
    //ano
    ["Cuaitiano","Culterano","Cultômano","Curiliano","Curvelano","Cutchiano","Dacnômano","Daliniano","Danubiano","Devoniano","Curitibano","Curitubano","Cuuaitiano","Cuvaitiano","Cézanniano","Daltoniano","Darwiniano","Deleuziano","Demetriano","Demonômano","Culicidiano","Deocleciano","Deslandiano","Deximontano","Dexrazoxano","Diacraniano","Diazometano","Dibrometano","Dickensiano","Dicloretano","Deranciclano","Dicondiliano","Difeniletano","Difenoletano","Diiodometano","Diospolitano","Dorsimediano","Dorsomediano","Ectocraniano","Einsteiniano","Crotopodômano","Cuproasbolano","Dacnomonômano","Deslandesiano","Dianopolitano","Dibenziletano","Diclorometano","Dicresiletano","Difenilmetano","Diplantidiano","Cubitocarpiano","Cuboidocuniano","Cumberlandiano","Dibromopropano","Difenilobutano","Difenilometano","Dinitropropano","Dipirrilmetano","Dissilicoetano","Divinopolitano","Desmobacteriano","Deuterostomiano","Dextrometorfano","Dibenzilometano","Dicresilometano","Difenilopropano","Dinaftilometano","Diplobacteriano","Dulcinopolitano","Ectorraquidiano","Cubitofalangiano","Eleuteropolitano","Emilianopolitano","Enterobacteriano","Escafoiducuneano","Esquizocelomiano","Fernandopolitano","Florestopolitano","Florianopolitano","Francinopolitano","Dorsiepitrocliano","Dorsoepitrocliano","Encefalorraquiano","Franciscopolitano","Iliotrocanteriano","Iliotrocantiniano","Bulboclitoridiano","Carpometacarpiano","Cefalorraquidiano","Clidoepitrocliano","Esternotroquiniano","Glicosaminoglicano","Cerebrorraquidiano","Condrocoracoidiano","Condroepitrocliano","Cricoaritenoidiano","Levofenacilmorfano","Lombotrocantiniano","Occipitomentoniano","Pelvitrocanteriano","Difenilodicloretano","Encefalorraquidiano","Esperantinopolitano","Esternomasseteriano","Ferroestilpnomelano","Hexaclorocicloexano","Acromiocoracoidiano","Constantinopolitano","Isquiotrocanteriano","Mandibulomentoniano","Difenilodimetiletano","Iliopretrocanteriano","Iliopretrocantiniano","Submaxiloparotidiano","Dicresilofenilometano","Difenilodiclorometano","Epitrocleoolecraniano","Escafoldoastragaliano","Escapulotroquiteriano","Lombocostotraqueliano","Lombodorsotraqueliano","Isquiopubitrocanteriano","Isquiointertrocanteriano"],
    //or
    ["Curador","Decisor","Delator","Detetor","Didutor","Difusor","Diretor","Ditador","Divisor","Dubador","Cruzador","Cumaclor","Curtidor","Decessor","Decompor","Defensor","Deflator","Defletor","Demissor","Derredor","Cunctator","Depressor","Descritor","Desprimor","Dessultor","Destrutor","Detenedor","Digitador","Dilatador","Dinamotor","Cronicador","Cunicultor","Curvejador","Desamoador","Descocador","Detergedor","Diastrefor","Dispositor","Efluviador","Eigenvalor","Cuneoflexor","Desamorador","Discorredor","Dissolvedor","Eletrocutor","Eletromotor","Enxabelador","Espatoflúor","Estupefator","Excitomotor","Decompositor","Descoloridor","Desfalecedor","Detumescedor","Diversicolor","Ecossondador","Electrocutor","Electromotor","Encarroçador","Ensurdecedor","Cronografador","Cronoprojetor","Ctonografador","Cuneoextensor","Cursivinhador","Dermoprotetor","Descomponedor","Desempulhador","Elanguescedor","Eletrogerador","Crustaticultor","Cuniculicultor","Desenlodaçador","Desfibrilhador","Electrogerador","Enlanguescedor","Entredevorador","Fermentescedor","Fotocompositor","Fototransistor","Cubitoindicador","Decentralizador","Desencoiraçador","Desencouraçador","Desintumescedor","Desmulsificador","Ejetocompressor","Fotocatalisador","Glicorregulador","Hidroagricultor","Ejectocompressor","Fotorrestituidor","Girostabilizador","Hiperglicemiador","Hipersustentador","Abdominoanterior","Broncoconstritor","Complementizador","Intercomunicador","Lactifermentador","Cromotipografador","Cromurinografador","Cronofotografador","Estereocomparador","Giroestabilizador","Abdominoposterior","Cromofotografador","Cromolitografador","Metaconglomerador","Metassedimentador","Cromourinografador","Cromozincografador","Espetropolarizador","Hidroclassificador","Antidesassimilador","Audiotransformador","Interesterificador","Morfodiferenciador","Paurometabolizador","Pluristratificador","Cronostratigrafador","Departamentalizador","Espectropolarizador","Parametamorfoseador","Pluriestratificador","Psicossensoriomotor","Quimiossintetizador","Transnacionalizador","Micropotencializador","Cromofotolitografador","Cromofototipografador","Radiotransistorizador","Cromozincolitografador","Cromozincotipografador","Cromofotozincografador"],
    //al
    ["Cubal","Cucal","Datal","Dedal","Dimal","Dogal","Dotal","Doçal","Ducal","Dural","Crupal","Crural","Cuchal","Cuneal","Cunhal","Curial","Curral","Curval","Dental","Diagal","Croocal","Crostal","Crucial","Crustal","Cubital","Cultual","Cuminal","Decanal","Decenal","Decimal","Crotafal","Crunodal","Culatral","Cultural","Cuspidal","Decidual","Decretal","Demerval","Dermeval","Dernival","Crunoidal","Custodial","Cutigeral","Cutlerial","Decagonal","Decendial","Deltoidal","Demencial","Denominal","Desumanal","Cubicarpal","Cucurbital","Decenviral","Decinormal","Deducional","Deslustral","Devocional","Dextraural","Diabolical","Diacromial","Cruciverbal","Deadjetival","Decadencial","Decemestral","Deferencial","Dentilabial","Dentolabial","Desinencial","Dextropedal","Diartrodial","Cromossomial","Crurogenital","Cubitodorsal","Denotacional","Dentolingual","Derivacional","Descensional","Dinamotermal","Discricional","Disfuncional","Cronostiquial","Cubitodigital","Cubitorradial","Cupramoniacal","Delinqüencial","Departamental","Deutocerebral","Dimetilacetal","Distocervical","Dorsicervical","Desmobranquial","Deutovertebral","Dextrocerebral","Distribucional","Duodenojejunal","Ecoempresarial","Endoperitoneal","Endoprocessual","Epicontinental","Escapulocostal","Deuterocerebral","Distobucoclusal","Dorsolombumeral","Eletromedicinal","Endocostocostal","Enenecontagonal","Enterobacterial","Enterobranquial","Eqüidimensional","Escapulorradial","Cronoprojecional","Deuteropiramidal","Dorsilombicostal","Dorsissacrumeral","Dorsolombocostal","Dorsossacrumeral","Electromedicinal","Espondilocondral","Estapeditemporal","Estaturoponderal","Dorsilombiumetral","Epitrocleocubital","Epitrocleorradial","Estapediotemporal","Esternoclidumeral","Estratificacional","Hebdomecontagonal","Hidroxicitronelal","Hipadrenocortical","Iliossacrofemoral","Espetrotuberancial","Faringoconjuntival","Glenocoracorradial","Heterossugestional","Hidroxicorticoidal","Hipoadrenocortical","Lombodorsocervical","Neurocomputacional","Orbitomaxilolabial","Prostatoperitoneal","Espectrotuberancial","Bolboprotuberancial","Bulboprotuberancial","Infraconstitucional","Qüindeciolionesimal","Temporossuperficial","Tibioperoniodigital","Epididimodeferencial","Esternossuboccipital","Isquiofemoroperonial","Cordotransversocordal","Costosternoclidumeral","Subabdominoperitoneal","Traquelossuboccipital","Transversoprismicostal","Traquelatloidoccipital","Esternocostoclaviumeral","Transversobasioccipital","Transversossecundicostal","Traqueloatloidooccipital","Pontomesencefalotegmental"],
    ["do Brasil", "do Trabalhador", "do Operário"], //aditivos
    ["Brasileiro", "Operário", "Cristão", "Protestante", "Católico"] //adjetivos
],
geradores = {
    1:function(){
        return `${getRandom(palavras[Math.floor(Math.random() * 3)])}s`;
    },
    2:function(){
        if(Math.floor(Math.random() * 2)===1){
            return `Partido ${getRandom(palavras[Math.floor(Math.random() * 4)])}`;
        }
        else{
            return `${getRandom(palavras[Math.floor(Math.random() * 3)])}s ${getRandom(palavras[6])}s`;
        }
    },
    3:function(){
        let n = Math.floor(Math.random() * 3);
        if(n===1){
            return `Partido ${getRandom(palavras[4])} ${getRandom(palavras[Math.floor(Math.random() * 3)])}`;
        }
        else if(n===2){
           return `Partido ${getRandom(palavras[Math.floor(Math.random() * 3)])} ${getRandom(palavras[3])}`;
        }
        else{
            return `Partido ${getRandom(palavras[Math.floor(Math.random() * 2)])} ${getRandom(palavras[6])}`;
        }
    },
    4:function(){
        if(Math.floor(Math.random() * 2)===1){
            return `Partido ${getRandom(palavras[Math.floor(Math.random() * 4)])} ${getRandom(palavras[5])}` 
        }
        else{
            return `Partido ${getRandom(palavras[4])} ${getRandom(palavras[Math.floor(Math.random() * 2) + 1])} ${getRandom(palavras[6])}`;
        }
    },
    5:function(){
        if(Math.floor(Math.random() * 2)===1){
            return `Partido ${getRandom(palavras[Math.floor(Math.random() * 3)])} do ${getRandom(palavras[3])} ${getRandom(palavras[6])}`;
        }
        else{
            return `Partido ${getRandom(palavras[4])} ${getRandom(palavras[Math.floor(Math.random() * 2) + 1])} ${getRandom(palavras[5])}`
        }
    }
};

function getRandom(array){
    return array[Math.floor(Math.random() * array.length)];
}

console.log('É PAL NA BOCA DO POVO!');