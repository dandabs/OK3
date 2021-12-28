var dict = {
    en: { 
        navHome: 'Home',
        navPortfolio: 'Portfolio',
        navContact: 'Contact',
        name: "DANIEL ADAMS",
        introTitle: 'INTRODUCTION',
        introDesc: 'Hi, I\'m Dan.',
        introBody1: 'I\'m a 16 year old from Ballymena, Northern Ireland 🇬🇧 🇮🇪.',
        introBody2: 'I am currently in the GCSE phase of British secondary education, taking exam courses in Business and Communication Studies, Digital Engineering, Chemistry, Biology, Physics, English Literature, Advanced Mathematics and Geography, and Mathematics, English and Religious Studies.',
        introBody3: 'In the near future I hope to continue my education journey through a Level 3 Extended Diploma in Computing / Software Engineering (or A-levels), and studying at university in Finland - where I\'m planning to immigrate to (as soon as possible) when I become an adult. I\'m interested in both software development and cyber-security, and I\'m considering a job in either one of these fields.',
        introBody4: 'Since creating my first basic HTML website at age 7, I\'ve been dedicated to improving my skills with developing websites, apps, APIs and pretty much anything that interests me - nothing is too big of a challenge to even try!',
    },
    fi: { 
        navHome: 'Koti',
        navPortfolio: 'Portfolio',
        navContact: 'Ottaa yhteyttä',
        name: "OTTO KOSKINEN",
        introTitle: 'JOHDANTO',
        introDesc: 'Moi, olen Dan.',
        introBody1: 'Olen 16-vuotias poika Ballymenasta, Pohjois-Irlannista 🇬🇧 🇮🇪.',
        introBody2: 'Olen tällä hetkellä brittiläisen toisen asteen koulutuksen GCSE-vaiheessa, jossa suoritan koekursseja liiketalouden ja viestinnän opinnoista, digitaalitekniikasta, kemiasta, biologiasta, fysiikasta, englanninkielisestä kirjallisuudesta, edistyneestä matematiikasta ja maantiedosta, ja matematiikan, englanti ja Uskonnolliset opinnot.',
        introBody3: 'Jatkossa toivon voivani jatkaa opiskelumatkaani Taso 3 Extended Diploma -ohjelmistotekniikan (tai A-tasojen) kautta ja opiskelemalla yliopistossa Suomessa - minne aion muuttaa aikuisena.(mahdollisimman pian). Olen kiinnostunut sekä ohjelmistokehityksestä että kyberturvallisuudesta ja harkitsen työtä jommallakummalla näistä aloista.',
        introBody4: 'Siitä lähtien, kun loin ensimmäisen HTML-perussivustoni 7-vuotiaana, olen omistautunut kehittämään taitojani kehittämällä verkkosivustoja, sovelluksia, API:ita ja melkein kaikkea, mikä minua kiinnostaa – mikään ei ole liian suuri haaste edes yrittää!',
    },
    no: { 
        navHome: 'Home',
        navPortfolio: 'Portefølje',
        navContact: 'Kontakt',
        name: "OTTO KOSKINEN",
        introTitle: 'INTRODUKSJON',
        introDesc: 'Hei, jeg er Dan.',
        introBody1: 'Jeg er en 16 år gammel fra Ballymena, i Nord-Irland 🇬🇧 🇮🇪.',
        introBody2: 'Jeg er for tiden i GCSE-fasen av britisk videregående opplæring, og tar eksamenskurs i forretnings- og kommunikasjonsstudier, digital ingeniørvitenskap, kjemi, biologi, fysikk, engelsk litteratur, avansert matematikk og geografi, og matematikk, engelsk og religionsvitenskap.',
        introBody3: 'I nær fremtid håper jeg å fortsette utdanningsreisen min gjennom et utvidet diplom på nivå 3 i databehandling/programvareteknikk (eller A-nivåer), og studere ved  et universitete i Finland - hvor jeg planlegger å immigrere til (så snart som mulig) når jeg blir voksen. Jeg er interessert i både programvareutvikling og cybersikkerhet, og jeg vurderer en jobb i ett av disse feltene.',
        introBody4: 'Siden jeg opprettet mitt første grunnleggende HTML-nettsted i en alder av 7, har jeg vært dedikert til å forbedre ferdighetene mine med å utvikle nettsteder, apper, APIer og stort sett alt som interesserer meg - ingenting er for stor utfordring til å prøve!',
    }
  };

var trn = new EOTranslator(dict, "en");

trn.translateDOM();

function doTrn(lang) {
    trn.language = lang;
    trn.translateDOM();
    $(".convert-emoji").each(function() {
        var original = $(this).html();
        // use .shortnameToImage if only converting shortnames (for slightly better performance)
        var converted = joypixels.toImage(original);
        $(this).html(converted);
    });
}
