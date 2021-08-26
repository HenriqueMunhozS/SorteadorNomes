import React from "react";
import logo from './background.jpeg';

import "./index.css";

export default function App() {
  const initialDelay = 100;
  const limit = 60;

  const [name, setName] = React.useState(null);
  const [count, setCount] = React.useState(limit);
  const [names, setNames] = React.useState([]);
  const [delay, setDelay] = React.useState(initialDelay);
  const [disable, setDisable] = React.useState(false);

  const randomizeName = () => {
    let index = Math.floor(Math.random() * names.length);
    setName(names[index]);
  };
  const clear = () => {
    setName([]);
  };
  
  // eslint-disable-next-line
  const shouldRandomizeName = () => {
     setDisable(true);
    if (count < limit) {
      randomizeName();
      setCount(count + 1);
      switch (count) {
        case limit * 0.5:
          setDelay(delay * 2);
          break;
        case limit * 0.7:
          setDelay(delay * 1.5);
          break;
        case limit * 0.8:
          setDelay(delay * 1.2);
          break;
        default:
          break;
      }
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      shouldRandomizeName();
      setDisable(false);
    }, delay);
    setDisable(false);
  }, [count, delay, shouldRandomizeName]);

  const startRandomize = () => {
    setDisable(true);
     buildNewNames()
    setDelay(initialDelay);
    setCount(0);
  };

  const buildNewNames = () => {
    var newNames = "danimonteiro93,danimonteiro93,danimonteiro93,danimonteiro93,danimonteiro93,danimonteiro93,danimonteiro93,danimonteiro93,F4aell,F4aell,F4aell,F4aell,F4aell,F4aell,AlexandroD.,F4aell,F4aell,F4aell,Enzofute,Enzofute,Enzofute,Enzofute,Enzofute,kauanzeiraa,kauanzeiraa,kauanzeiraa,kauanzeiraa,kauanzeiraa,kauanzeiraa,kauanzeiraa,kauanzeiraa,kauanzeiraa,jovito_16,jovito_16,jovito_16,jovito_16,jovito_16,jovito_16,jovito_16,jovito_16,jovito_16,vinihadad,vinihadad,vinihadad,vinihadad,vinihadad,vinihadad,vinihadad,vinihadad,mamot,mamot,mamot,mamot,mamot,mamot,mamot,Macaulay,Macaulay,Macaulay,Macaulay,vascomedy14,vascomedy14,vascomedy14,vascomedy14,FUTWIZ_Vini,vascomedy14,vascomedy14,vascomedy14,vascomedy14,vascomedy14,mayquinho6x,Macaulay,Macaulay,mayquinho6x,mayquinho6x,mayquinho6x,mayquinho6x,mayquinho6x,Macaulay,mayquinho6x,mayquinho6x,mayquinho6x,Macaulay,Macaulay,jonathan_gabriel_tz,jonathan_gabriel_tz,Gabriel,Gabriel,Gabriel,Gabriel,Gabriel,Gabriel,Gabriel,patrick_franz,patrick_franz,Nervo.,Nervo.,Nervo.,Nervo.,Nervo.,Nervo.,resouzza_,resouzza_,resouzza_,resouzza_,resouzza_,resouzza_,resouzza_,resouzza_,Nervo.,Nervo.,Nervo.,wesleyfsiqueira,wesleyfsiqueira,Jonao132,Jonao132,Jonao132,Jonao132,Jonao132,MagicDream,MagicDream,MagicDream,MagicDream,juliojales01,juliojales01,juliojales01,juliojales01,juliojales01,juliojales01,jmilitao_,JonasEduardoS.,JonasEduardoS.,JonasEduardoS.,JonasEduardoS.,JonasEduardoS.,JonasEduardoS.,JonasEduardoS.,LeolSl_,LeolSl_,LeolSl_,LeolSl_,deblayckk,deblayckk,deblayckk,deblayckk,deblayckk,deblayckk,deblayckk,deblayckk,deblayckk,sixcr7,sixcr7,sixcr7,sixcr7,sixcr7,sixcr7,sixcr7,sixcr7,sixcr7,felipeazzcarlos,felipeazzcarlos,felipeazzcarlos,felipeazzcarlos,felipeazzcarlos,felipeazzcarlos,felipeazzcarlos,felipeazzcarlos,felipeazzcarlos,ju_tilly,ju_tilly,ju_tilly,ju_tilly,ju_tilly,ju_tilly,ju_tilly,ju_tilly,ju_tilly,cecere96_,cecere96_,cecere96_,cecere96_,cecere96_,cecere96_,cecere96_,cecere96_,cecere96_,luqtee,luqtee,celinaneves212,celinaneves212,linikinhow,linikinhow,linikinhow,linikinhow,linikinhow,linikinhow,ingridmenon,ingridmenon,ingridmenon,ingridmenon,ingridmenon,ingridmenon,ingridmenon,ingridmenon,ingridmenon,renatoobotelhoo,renatoobotelhoo,renatoobotelhoo,renatoobotelhoo,renatoobotelhoo,renatoobotelhoo,renatoobotelhoo,renatoobotelhoo,renatoobotelhoo,renatoobotelhoo,GustavoTreco,GustavoTreco,GustavoTreco,GustavoTreco,GustavoTreco,GustavoTreco,ArYellll,ArYellll,ArYellll,ArYellll,ArYellll,ArYellll,ArYellll,ArYellll,mimilton22,bictorio1994,bictorio1994,Xehrner,Xehrner,bictorio1994,Xehrner,bictorio1994,bictorio1994,!Dan,Xehrner,!Dan,bictorio1994,!Dan,!Dan,Xehrner,!Dan,!Dan,Xehrner,!Dan,bictorio1994,Xehrner,bictorio1994,!Dan,!Dan,Xehrner,Xehrner,Ghenrique10,Ghenrique10,Ghenrique10,Ghenrique10,Ghenrique10,Ghenrique10,Ghenrique10,Ghenrique10,AllphA,AllphA,AllphA,AllphA,AllphA,AllphA,AllphA,AllphA,AllphA,alex_3199,alex_3199,alex_3199,alex_3199,alex_3199,alex_3199,alex_3199,alex_3199,alex_3199,MarcosVGC04,MarcosVGC04,GutoM.,GutoM.,michel12l,michel12l,michel12l,luckazs14,michel12l,michel12l,michel12l,michel12l,michel12l,michel12l,jotasete,jotasete,jotasete,patrick_payday,patrick_franz,patrick_payday,luckazs14,patrick_franz,luckazs14,luckazs14,patrick_franz,luckazs14,luckazs14,patrick_payday,luckazs14,luckazs14,luckazs14,luckazs14,AlexOSander,AlexOSander,AlexOSander,AlexOSander,AlexOSander,AlexOSander,AlexOSander,AlexOSander,ademar_filho_,ademar_filho_,ademar_filho_,ademar_filho_,ademar_filho_,PombaFumante,ademar_filho_,PombaFumante,ademar_filho_,PombaFumante,PombaFumante,PombaFumante,PombaFumante,ademar_filho_,ademar_filho_,PombaFumante,PombaFumante,EnzoF.,EnzoF.,EnzoF.,EnzoF.,EnzoF.,superthorel,superthorel,superthorel,superthorel,superthorel,EnzoF.,EnzoF.,arthur12bd,arthur12bd,arthur12bd,arthur12bd,jmilitao_,jmilitao_,jmilitao_,jmilitao_,jmilitao_,jmilitao_,jmilitao_,jmilitao_,jmilitao_,eduqueirozz,eduqueirozz,eduqueirozz,eduqueirozz,eduqueirozz,lucascleite1,lucascleite1,lucascleite1,lucascleite1,lucascleite1,lucascleite1,lucascleite1,lucascleite1,ryan_frm,ryan_frm,ryan_frm,ryan_frm,ryan_frm,ryan_frm,ryan_frm,Epyson,Epyson,Epyson,Epyson,Epyson,Epyson,HerbertWill,HerbertWill,HerbertWill,HerbertWill,HerbertWill,HerbertWill,HerbertWill,HerbertWill,caiogaldino,caiogaldino,caiogaldino,caiogaldino,caiogaldino,caiogaldino,caiogaldino,caiogaldino,femv_vinyrocha,femv_vinyrocha,femv_vinyrocha,femv_vinyrocha,femv_vinyrocha,femv_vinyrocha,femv_vinyrocha,atp_sport,wilshowgame,IsaacLopes,IsaacLopes,IsaacLopes,IsaacLopes,IsaacLopes,IsaacLopes,IsaacLopes,IsaacLopes,IsaacLopes,TheLastXobla,TheLastXobla,TheLastXobla,TheLastXobla,TheLastXobla,TheLastXobla,TheLastXobla,TheLastXobla,TheLastXobla,eicaiow,eicaiow,eicaiow,eicaiow,eicaiow,eicaiow,eicaiow,eicaiow,pcrmdfut,pcrmdfut,bebandeira2,bebandeira2,bebandeira2,bebandeira2,bebandeira2,bebandeira2,Arandel,Arandel,Arandel,Arandel,Arandel,Arandel,atp_sport,atp_sport,JosRodriggo1,atp_sport,atp_sport,atp_sport,atp_sport,atp_sport,atp_sport,Lucas'LcK',Lucas'LcK',Lucas'LcK',Lucas'LcK',Lucas'LcK',Lucas'LcK',alf_05,Lucas'LcK',Lucas'LcK',Lucas'LcK',alf_05,Renan__Silva,Renan__Silva,Renan__Silva,Renan__Silva,Renan__Silva,Renan__Silva,Renan__Silva,SrLuigiBr,guedesx17,guedesx17,guedesx17,guedesx17,guedesx17,guedesx17,guedesx17,guedesx17,matheustracz,matheustracz,femv_vinyrocha,femv_vinyrocha,raelzim7,raelzim7,raelzim7,raelzim7,cf95jr,DRT_SantiagoJR,DRT_SantiagoJR,DRT_SantiagoJR,DRT_SantiagoJR,DRT_SantiagoJR,DRT_SantiagoJR,DRT_SantiagoJR,DRT_SantiagoJR,DRT_SantiagoJR,Pedropereiiira,matheuss_i10,matheuss_i10,matheuss_i10,matheuss_i10,matheuss_i10,matheuss_i10,matheuss_i10,matheuss_i10,matheuss_i10,rdt_aleefsep,rdt_aleefsep,rdt_aleefsep,rdt_aleefsep,rdt_aleefsep,rdt_aleefsep,rdt_aleefsep,rdt_aleefsep,rdt_aleefsep,prestjord5,prestjord5,prestjord5,prestjord5,prestjord5,prestjord5,prestjord5,prestjord5,prestjord5,silver8v,silver8v,silver8v,silver8v,silver8v,tiagosector12,tiagosector12,tiagosector12,asanoturna87,tiagosector12,asanoturna87,tiagosector12,tiagosector12,tiagosector12,asanoturna87,robertarlem7,asanoturna87,tiagosector12,robertarlem7,robertarlem7,tiagosector12,asanoturna87,robertarlem7,robertarlem7,robertarlem7,robertarlem7,robertarlem7,robertarlem7,gcsilva93,gcsilva93,bernardohindi,bernardohindi,bernardohindi,bernardohindi,bernardohindi,bernardohindi,bernardohindi,bernardohindi,vitizmotog,vitizmotog,vitizmotog,vitizmotog,vitizmotog,vitizmotog,vitizmotog,vitizmotog,vitizmotog,AlexanderE.,AlexanderE.,AlexanderE.,FifaTeca66,FifaTeca66,mrmundodosnerds,zekacarlos,BH_ZOLF,BH_ZOLF,BH_ZOLF,BH_ZOLF,BH_ZOLF,BH_ZOLF,BH_ZOLF,BH_ZOLF,BH_ZOLF,SrLuigiBr,SrLuigiBr,SrLuigiBr,SrLuigiBr,SrLuigiBr,SrLuigiBr,SrLuigiBr,Naybh,Naybh,Naybh,Naybh,Naybh,Naybh,Naybh,Naybh,MES_Eduardo,MES_Eduardo,MES_Eduardo,MES_Eduardo,mrmundodosnerds,mrmundodosnerds,mrmundodosnerds,mrmundodosnerds,mrmundodosnerds,mrmundodosnerds,mrmundodosnerds,mrmundodosnerds,MES_Eduardo,MES_Eduardo,MES_Eduardo,MES_Eduardo,MES_Eduardo,Pedrojsoares97,jBlazhe,jBlazhe,jBlazhe,jBlazhe,jBlazhe,Pedrojsoares97,jBlazhe,jBlazhe,Pedrojsoares97,Pedrojsoares97,Pedrojsoares97,jBlazhe,Pedrojsoares97,Pedrojsoares97,jBlazhe,jBlazhe,Pedrojsoares97,Pedrojsoares97,alexsandro3123,pdrl1,pdrl1,pdrl1,pdrl1,pdrl1,murilo_silva14,murilo_silva14,murilo_silva14,murilo_silva14,murilo_silva14,murilo_silva14,murilo_silva14,murilo_silva14,murilo_silva14,MozerGames,MozerGames,MozerGames,spqr_marcosab3,MozerGames,MozerGames,MozerGames,spqr_marcosab3,MozerGames,MozerGames,MozerGames,spqr_marcosab3,spqr_marcosab3,spqr_marcosab3,spqr_marcosab3,spqr_marcosab3,spqr_marcosab3,spqr_marcosab3,andrade_pe23,andrade_pe23,andrade_pe23,andrade_pe23,andrade_pe23,andrade_pe23,andrade_pe23,andrade_pe23,rvgrapha7,rvgrapha7,rvgrapha7,rvgrapha7,rvgrapha7,rvgrapha7,rvgrapha7,vagnerdias12,vagnerdias12,vagnerdias12,vagnerdias12,vagnerdias12,vagnerdias12,vagnerdias12,vagnerdias12,vagnerdias12,paidebentoeeva,paidebentoeeva,paidebentoeeva,paidebentoeeva,paidebentoeeva,paidebentoeeva,paidebentoeeva,paidebentoeeva,paidebentoeeva,pjmdicty,devil_bymaside,pjmdicty,pjmdicty,pjmdicty,pjmdicty,pjmdicty,pjmdicty,pjmdicty,pjmdicty,devil_bymaside,leozica_11,f2ds_coritiba,leozica_11,leozica_11,leozica_11,f2ds_coritiba,leozica_11,f2ds_coritiba,leozica_11,leozica_11,f2ds_coritiba,f2ds_coritiba,f2ds_coritiba,f2ds_coritiba,f2ds_coritiba,f2ds_coritiba,henrique_munhoz,henrique_munhoz,henrique_munhoz,henrique_munhoz,henrique_munhoz,henrique_munhoz,henrique_munhoz,henrique_munhoz,henrique_munhoz,barthoobr,barthoobr,barthoobr,barthoobr,barthoobr,paulohlp21,cRFX,cRFX,cRFX,cRFX,cRFX,cRFX,cRFX,cRFX,de_bruno23,de_bruno23,de_bruno23,de_bruno23,de_bruno23,de_bruno23,de_bruno23,de_bruno23,de_bruno23,gus_tutta86,gus_tutta86,gus_tutta86,gus_tutta86,gus_tutta86,gus_tutta86,gus_tutta86,gus_tutta86,xandao787,xandao787,xandao787,xandao787,xandao787,xandao787,xandao787,gus_tutta86,xandao787,xandao787,NaiaK1,NaiaK1,NaiaK1,NaiaK1,NaiaK1,NaiaK1,NaiaK1,stormgirl011,Dropexavier,Dropexavier,Dropexavier,Dropexavier,Dropexavier,Dropexavier,Dropexavier,Prosa94,Prosa94,italoghetti,italoghetti,italoghetti,italoghetti,italoghetti,italoghetti,italoghetti,Jvsales12,Jvsales12,Jvsales12,italoghetti,Jvsales12,Jvsales12,italoghetti,Jvsales12,Jvsales12,Helinnn123,Helinnn123,Helinnn123,Helinnn123,Helinnn123,Helinnn123,Helinnn123,Helinnn123,Helinnn123,KnighttFPS_,KnighttFPS_,KnighttFPS_,KnighttFPS_,KnighttFPS_,KnighttFPS_,KnighttFPS_,KnighttFPS_,alexsandro3123,alexsandro3123,alexsandro3123,viitorr_,alexsandro3123,viitorr_,viitorr_,viitorr_,drmarveldc,drmarveldc,drmarveldc,drmarveldc,reenanm96,drmarveldc,reenanm96,drmarveldc,drmarveldc,alexsandro3123,gmf10,alexsandro3123,jpbelluzzo,drmarveldc,gmf10,gmf10,jpbelluzzo,jpbelluzzo,gmf10,jpbelluzzo,gmf10,jpbelluzzo,reenanm96,gmf10,reenanm96,reenanm96,reenanm96,gmf10,reenanm96,drmarveldc,drmarveldc,gabrieux7,gmf10,reenanm96,gabrieux7,gabrieux7,gabrieux7,reenanm96,gabrieux7,gabrieux7,cattaporaa,cattaporaa,cattaporaa,gabrieux7,gabrieux7,cattaporaa,cattaporaa,cattaporaa,cattaporaa,cattaporaa,BrunoDijian,MeteuEssa,MeteuEssa,BrunoDijian,MeteuEssa,cattaporaa,cattaporaa,MeteuEssa,BrunoDijian,MeteuEssa,MeteuEssa,BrunoDijian,BrunoDijian,BrunoDijian,marcelo173,BrunoDijian,BrunoDijian,BrunoDijian,pedrohenr15,lucasvb00i,pedrohenr15,pedrohenr15,pedrohenr15,pedrohenr15,anamurassaki,anamurassaki,anamurassaki,anamurassaki,ivancdi,anamurassaki,anamurassaki,anamurassaki,anamurassaki,chocoozlima_12,chocoozlima_12,chocoozlima_12,chocoozlima_12,anamurassaki,chocoozlima_12,nubcaolho,nubcaolho,nubcaolho,nubcaolho,nubcaolho,nubcaolho,nubcaolho,chocoozlima_12,nubcaolho,chocoozlima_12,nubcaolho,chocoozlima_12,ivancdi,chocoozlima_12,arthur12bd,ivancdi,ivancdi,ivancdi,arthur12bd,arthur12bd,ivancdi,ivancdi,ivancdi,ivancdi,ivancdi,DanielSilva009,DanielSilva009,DanielSilva009,FBarreto_04,FBarreto_04,FBarreto_04,FBarreto_04,FBarreto_04,FBarreto_04,FBarreto_04,TallithaS.,TallithaS.,TallithaS.,TallithaS.,TallithaS.,TallithaS.,TallithaS.,TallithaS.,TallithaS.,felipecrf,MococaPlaysz,MococaPlaysz,MococaPlaysz,MococaPlaysz,MococaPlaysz,MococaPlaysz,MococaPlaysz,MococaPlaysz,MococaPlaysz,corinthiano_005,corinthiano_005,corinthiano_005,corinthiano_005,corinthiano_005,corinthiano_005,corinthiano_005,WHlTAKER,WHlTAKER,WHlTAKER,WHlTAKER,WHlTAKER,WHlTAKER,WHlTAKER,WHlTAKER,WHlTAKER,victor_schroder,naby_keita_,naby_keita_,naby_keita_,naby_keita_,naby_keita_,naby_keita_,naby_keita_,naby_keita_,naby_keita_,Adriano_Angelo,Adriano_Angelo,Adriano_Angelo,Adriano_Angelo,Adriano_Angelo,Adriano_Angelo,Adriano_Angelo,Adriano_Angelo,Adriano_Angelo,BrunoViana,BrunoViana,BrunoViana,BrunoViana,BrunoViana,BrunoViana,BrunoViana,BrunoViana,BrunoViana,BrunoViana,RafGauterio,RafGauterio,RafGauterio,RafGauterio,RafGauterio,RafGauterio,RafGauterio,RafGauterio,gabsneery,gabsneery,gabsneery,gabsneery,gabsneery,gabsneery,gabsneery,gabsneery,gabsneery,jozuellinton,JHigin0,JHigin0,JHigin0,JHigin0,JHigin0,Pedrosakaue,Pedrosakaue,Pedrosakaue,Pedrosakaue,Pedrosakaue,Pedrosakaue,Pedrosakaue,Pedrosakaue,Pedrosakaue,oGugaruto,oGugaruto,oGugaruto,oGugaruto,oGugaruto,oGugaruto,oGugaruto,oGugaruto,oGugaruto,aquino15_,lucassquar,lucassquar,lucassquar,lucassquar,lucassquar,aquino15_,aquino15_,aquino15_,aquino15_,aquino15_,aquino15_,aquino15_,aquino15_,stunzin_,stunzin_,stunzin_,stunzin_,stunzin_,stunzin_,stunzin_,stunzin_,felipe11zanata,felipe11zanata,lucassquar,lucassquar,lucassquar,lucassquar,marcelinho08,marcelinho08,marcelinho08,marcelinho08,marcelinho08,marcelinho08,marcelinho08,marcelinho08,marcelinho08,odiehard,odiehard,victor_schroder,victor_schroder,victor_schroder,victor_schroder,victor_schroder,victor_schroder,victor_schroder,victor_schroder,ErzaxDRules,ErzaxDRules,ErzaxDRules,ErzaxDRules,Luann_67,Luann_67,Luann_67,Luann_67,Luann_67,Luann_67,Luann_67,Luann_67,Luann_67,motavg,motavg,motavg,motavg,motavg,motavg,motavg,motavg,motavg,felipecrf,felipecrf,felipecrf,felipecrf,felipecrf,felipecrf,felipecrf,felipecrf,Guito_Santos,Guito_Santos,souzadon07,souzadon07,souzadon07,souzadon07,souzadon07,souzadon07,souzadon07,andrecaetano1,andrecaetano1,andrecaetano1,andrecaetano1,andrecaetano1,andrecaetano1,andrecaetano1,andrecaetano1,andrecaetano1,zIgoor__,zIgoor__,zIgoor__,zIgoor__,zIgoor__,zIgoor__,zIgoor__,roger_2010,roger_2010,zIgoor__,zIgoor__,chbarbosa92,chbarbosa92,chbarbosa92,chbarbosa92,chbarbosa92,chbarbosa92,chbarbosa92,chbarbosa92,chbarbosa92,melquimarques,melquimarques,melquimarques,melquimarques,melquimarques,roger_2010,roger_2010,roger_2010,melquimarques,roger_2010,patrickhottz,patrickhottz,patrickhottz,helsll,helsll,brazilian_kd,helsll,brazilian_kd,helsll,brazilian_kd,brazilian_kd,brazilian_kd,brazilian_kd,brazilian_kd,xGeGaMeR,xGeGaMeR,brazilian_kd,xGeGaMeR,brazilian_kd,brazilian_kd,xGeGaMeR,xGeGaMeR,xGeGaMeR,xGeGaMeR,xGeGaMeR,xGeGaMeR,xGeGaMeR,berg_cod,berg_cod,berg_cod,ThiagoB.,negriell,negriell,lucasbraga19,negriell,ThiagoB.,ThiagoB.,ThiagoB.,lucasbraga19,ThiagoB.,lucasbraga19,ThiagoB.,ThiagoB.,lucasbraga19,lucasbraga19,ThiagoB.,lucasbraga19,lucasbraga19,lucasbraga19,lucaspaim4,lucaspaim4,ThiagoB.,lucaspaim4,thiagoparadisee,leandrohel,lucaspaim4,lucaspaim4,lucaspaim4,victor_schroder,lucaspaim4,leandrohel,leandrohel,leandrohel,CaioCésar,lucaspaim4,lucaspaim4,CaioCésar,leandrohel,CaioCésar,CaioCésar,Guito_Santos,leandrohel,leandrohel,CaioCésar,lisboaluis12,babys28,lisboaluis12,babys28,babys28,lisboaluis12,babys28,CaioCésar,Guito_Santos,lisboaluis12,CaioCésar,lisboaluis12,lisboaluis12,Guito_Santos,Guito_Santos,hermittlol,CaioCésar,lisboaluis12,lisboaluis12,thiagoparadisee,thiagoparadisee,babys28,babys28,hermittlol,wendell619,hermittlol,ramonziim,ramonziim,hermittlol,ramonziim,hermittlol,ramonziim,ramonziim,hermittlol,ramonziim,hermittlol,hermittlol,thiagoparadisee,ramonziim,hermittlol,Guito_Santos,hermittlol,Brendon_stumpf,Guito_Santos,Brendon_stumpf,thiagoparadisee,Brendon_stumpf,thiagoparadisee,thiagoparadisee,thiagoparadisee,ramonziim,fidelixd,ramonziim,fidelixd,fidelixd,fidelixd,tomasemb,Brendon_stumpf,Brendon_stumpf,Brendon_stumpf,tomasemb,bira1909,Brendon_stumpf,bira1909,bira1909,Brendon_stumpf,tomasemb,tomasemb,bira1909,tomasemb,tomasemb,juanmsa,tomasemb,tomasemb,tomasemb,tomasemb,jonathan_gabriel_tz,jonathan_gabriel_tz,jonathan_gabriel_tz,jonathan_gabriel_tz,ToomZu95,ToomZu95,ToomZu95,ToomZu95,ToomZu95,ToomZu95,ToomZu95,ToomZu95,ToomZu95,paulohlp21,paulohlp21,paulohlp21,paulohlp21,paulohlp21,paulohlp21,paulohlp21,paulohlp21,paulohlp21,DantheBNN,DantheBNN,DantheBNN,DantheBNN,DantheBNN,DantheBNN,DantheBNN,DantheBNN,DantheBNN,ViniciusMarques,ViniciusMarques,ViniciusMarques,ViniciusMarques,ViniciusMarques,ViniciusMarques,ViniciusMarques,ViniciusMarques,YuriONLYx,YuriONLYx,YuriONLYx,YuriONLYx,YuriONLYx,YuriONLYx,YuriONLYx,YuriONLYx,helsll,helsll,helsll,MGCF_Will,MGCF_Will,MGCF_Will,MGCF_Will,MGCF_Will,MGCF_Will,MGCF_Will,MGCF_Will,MGCF_Will,MGCF_Will,DochaCarol,DochaCarol,DochaCarol,DochaCarol,DochaCarol,DochaCarol,DochaCarol,DochaCarol,caroldocha,caroldocha,GustavooHC,GustavooHC,GustavooHC,GustavooHC,raelzim7,raelzim7,raelzim7,dimzinho,dimzinho,dimzinho,dimzinho,dimzinho,dimzinho,dimzinho,dimzinho,dimzinho,digmr10,digmr10,iago094,digmr10,iago094,digmr10,digmr10,iago094,digmr10,digmr10,iago094,iago094,iago094,uBross,uBross,uBross,uBross,uBross,Mi9ueL_FC,uBross,IgorHerculano,Mi9ueL_FC,Mi9ueL_FC,Kio1821,uBross,uBross,Mi9ueL_FC,IgorHerculano,IgorHerculano,Mi9ueL_FC,IgorHerculano,rampazzo_r10,Mi9ueL_FC,Kio1821,IgorHerculano,Mi9ueL_FC,Kio1821,rampazzo_r10,IgorHerculano,Mi9ueL_FC,Kio1821,rampazzo_r10,Kio1821,IgorHerculano,Kio1821,Kio1821,Kio1821,Tito190894,Tito190894,viniciuslp27,viniciuslp27,Tito190894,viniciuslp27,viniciuslp27,viniciuslp27,juanmsa,juanmsa,juanmsa,juanmsa,ArthurMC09,ArthurMC09,ArthurMC09,ArthurMC09,juanmsa,juanmsa,alequifu,ArthurMC09,ArthurMC09,Tito190894,ArthurMC09,Tito190894,Tito190894,ArthurMC09,ArthurMC09,Tito190894,joaogoulartt,joaogoulartt,alequifu,Tito190894,FviteF,FviteF,alequifu,FviteF,alequifu,joaogoulartt,alequifu,joaogoulartt,alequifu,alequifu,alequifu,joaogoulartt,joaogoulartt,FviteF,FviteF,matheusabdala_08,FviteF,FviteF,FviteF,joaogoulartt,matheusabdala_08,joaogoulartt,alequifu,matheusabdala_08,mauromesc,mauromesc,mauromesc,mauromesc,mauromesc,adissonr,mauromesc,adissonr,adissonr,mauromesc,adissonr,adissonr,adissonr,mauromesc,mauromesc,TaxistaAngolano,adissonr,adissonr,TaxistaAngolano,TaxistaAngolano,jonnyg_ames,jonnyg_ames,jonnyg_ames,jonnyg_ames,jonnyg_ames,ulsnasc,Pedrofsand,Pedrofsand,Thiagod.,Thiagod.,Thiagod.,Thiagod.,Thiagod.,Pedrofsand,Thiagod.,Pedrofsand,Thiagod.,Thiagod.,Thiagod.,Pedrofsand,Pedrofsand,Pedrofsand,Pedrofsand,loditcum,RenatoS.,RenatoS.,BrunoM02,BrunoM02,BrunoM02,BrunoM02,BrunoM02,BrunoM02,BrunoM02,BrunoM02,BrunoM02,1ygao,C4TRO_,C4TRO_,C4TRO_,1ygao,1ygao,1ygao,1ygao,1ygao,1ygao,1ygao,k1m1maro1,k1m1maro1,1ygao,k1m1maro1,k1m1maro1,k1m1maro1,MGCF_Fuchs,k1m1maro1,k1m1maro1,k1m1maro1,1ygao,silvafm2,silvafm2,silvafm2,silvafm2,silvafm2,vhcordeiro16,silvafm2,silvafm2,silvafm2,EURegis_,vhcordeiro16,EURegis_,MGCF_Fuchs,fast_pedropaulo,EURegis_,MGCF_Fuchs,EURegis_,silvafm2,silvafm2,EURegis_,EURegis_,EURegis_,EURegis_,MGCF_Fuchs,PradoMonster_,MGCF_Fuchs,MGCF_Fuchs,MGCF_Fuchs,robinho_araujo,robinho_araujo,robinho_araujo,robinho_araujo,robinho_araujo,MGCF_Fuchs,robinho_araujo,PradoMonster_,MGCF_Fuchs,MGCF_Fuchs,ulsnasc,PradoMonster_,PradoMonster_,ulsnasc,robinho_araujo,PradoMonster_,robinho_araujo,ulsnasc,ulsnasc,ulsnasc,ulsnasc,PradoMonster_,PradoMonster_,ulsnasc,PradoMonster_,ulsnasc,ulsnasc,PradoMonster_,PradoMonster_,Andrea_Mello79,Andrea_Mello79,Andrea_Mello79,Andrea_Mello79,Andrea_Mello79,Andrea_Mello79,Andrea_Mello79,Andrea_Mello79,MarioJorge,MarioJorge,MarioJorge,MarioJorge,MarioJorge,MarioJorge,MarioJorge,MarioJorge,JonasEduardoS.,JonasEduardoS.,Ruanlv454,Ruanlv454,Ruanlv454,Ruanlv454,Ruanlv454,Ruanlv454,Ruanlv454,Ruanlv454,Ruanlv454,paodealho_,Kyatram,Kyatram,paodealho_,Kyatram,paodealho_,Kyatram,paodealho_,paodealho_,paodealho_,paodealho_,Kyatram,Kyatram,paodealho_,Kyatram,paodealho_,paodealho_,Kyatram,vitorof3,vitorof3,vitorof3,vitorof3,vitorof3,vitorof3,vitorof3,DanielTay,DanielTay,DanielTay,DanielTay,DanielTay,DanielTay,DanielTay,DanielTay,DanielTay,_ricardo_mendes,_ricardo_mendes,_ricardo_mendes,_ricardo_mendes,_ricardo_mendes,_ricardo_mendes,_ricardo_mendes,_ricardo_mendes,gabriels.,gabriels.,gabriels.,gabriels.,gabriels.,o_ricardo_junior,o_ricardo_junior,o_ricardo_junior,o_ricardo_junior,o_ricardo_junior,rennan_aa,rennan_aa,rennan_aa,rennan_aa,rennan_aa,rennan_aa,rennan_aa,LukeR.,LukeR.,LukeR.,LukeR.,LukeR.,LukeR.,LukeR.,LukeR.,guprf,guprf,guprf,guprf,guprf,guprf,guprf,edertraskini,edertraskini,edertraskini,edertraskini,edertraskini,edertraskini,edertraskini,edertraskini,edertraskini,edertraskini,vinitramontin,vinitramontin,vinitramontin,vinitramontin,vinitramontin,vinitramontin,vinitramontin,vinitramontin,bnanatwitch,bnanatwitch,bnanatwitch,Kevin____,Kevin____,Kevin____,Kevin____,Kevin____,Kevin____,Kevin____,Kevin____,Kevin____,Kevin____,yPassarinho17,yPassarinho17,leozera730,leozera730,fefux,fefux,fefux,fefux,fefux,leozera730,fefux,leozera730,fefux,leozera730,leozera730,fefux,fefux,yPassarinho17,leozera730,yPassarinho17,viniluz97,berg_cod,berg_cod,yPassarinho17,yPassarinho17,yPassarinho17,yPassarinho17,Gabriel35748114,Gabriel35748114,Gabriel35748114,Gabriel35748114,wilsifan,wilsifan,Gabriel35748114,wilsifan,mathg__,leozera730,leozera730,mathg__,mathg__,wilsifan,mathg__,mathg__,wilsifan,mathg__,wilsifan,mathg__,mathg__,wilsifan,jhonribeiro,tn_carlos,jhonribeiro,tn_carlos,rafaelllbraga,tn_carlos,tn_carlos,jhonribeiro,jvitor__19,jhonribeiro,jhonribeiro,jhonribeiro,jhonribeiro,jvitor__19,tn_carlos,tn_carlos,tz_kruel,tz_kruel,jvitor__19,jvitor__19,tz_kruel,tn_carlos,tz_kruel,tz_kruel,tn_carlos,cm_neiva,cm_neiva,tz_kruel,tz_kruel,tn_carlos,tz_kruel,Ehh_o_Jeh,cm_neiva,cm_neiva,Ehh_o_Jeh,cm_neiva,cm_neiva,cm_neiva,cm_neiva,jhonribeiro,jhonribeiro,cm_neiva,cm_neiva,Ehh_o_Jeh,marcelo173,Ehh_o_Jeh,rogerio_do_ut,marcelo173,Ehh_o_Jeh,Ehh_o_Jeh,LucasCamargo,Ehh_o_Jeh,rafaelllbraga,LucasCamargo,LucasCamargo,rafaelllbraga,LucasCamargo,henriquehasse,henriquehasse,henriquehasse,henriquehasse,henriquehasse,Ehh_o_Jeh,Ehh_o_Jeh,marcelo173,henriquehasse,henriquehasse,marcelo173,marcelo173,marcelo173,bnanatwitch,marcelo173,marcelo173,bnanatwitch,bnanatwitch,bnanatwitch,bnanatwitch,bnanatwitch,rafaelllbraga,LucasCamargo,rafaelllbraga,LucasCamargo,rafaelllbraga,LucasCamargo,rafaelllbraga,rafaelllbraga,LucasCamargo,LucasCamargo,sirbuckfps,LucasCamargo,rafaelllbraga,rafaelllbraga,sirbuckfps,sirbuckfps,joov1903,joov1903,joov1903,sirbuckfps,joov1903,sirbuckfps,joov1903,joov1903,joov1903,sirbuckfps,sirbuckfps,joov1903,joov1903,BrunoBratti,sirbuckfps,BrunoBratti,BrunoBratti,sirbuckfps,jamaicaabaixodzero,RafaelLiraBraga,sirbuckfps,jamaicaabaixodzero,brunofurlannnnnn,brunofurlannnnnn,jamaicaabaixodzero,arthuurgso,arthuurgso,arthuurgso,BrunoBratti,BrunoBratti,BrunoBratti,BrunoBratti,arthuurgso,brunofurlannnnnn,brunofurlannnnnn,arthuurgso,BrunoBratti,BrunoBratti,BrunoBratti,VINIBOX_,VINIBOX_,VINIBOX_,VINIBOX_,VINIBOX_,VINIBOX_,VINIBOX_,VINIBOX_,jussanbonifacio,jussanbonifacio,jussanbonifacio,jussanbonifacio,jussanbonifacio,jussanbonifacio,jussanbonifacio,jussanbonifacio"
    newNames = newNames
      .split(",")
      .filter(item => !!item);

    setNames(newNames);
  };

  return (
    <div
      className={`text-center hero-image d-flex flex-column align-items-center justify-content-center text-white`}
      style={{ height: "100vh", backgroundImage: `url(${logo})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <div>
        <h1 className={`display-1`}>{name}</h1>
      </div>
      <div className="container-fluid">
        <div className="text-center mt-2">
          <button disabled={disable} className="btn btn-secondary" style={{backgroundColor: 'yellow', color: 'black' }} onClick={startRandomize}>
            Sortear
          </button>
        </div>
        <div className="text-center mt-2">
          <button className="btn btn-secondary" style={{backgroundColor: 'yellow', color: 'black' }} onClick={clear}>
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
}
