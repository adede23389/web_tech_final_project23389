/*! jQuery Validation Plugin - v1.19.3 - 1/9/2021
 * https://jqueryvalidation.org/
 * Copyright (c) 2021 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return a.extend(a.validator.messages,{required:"Polje je obavezno.",remote:"Sredite ovo polje.",email:"Unesite ispravnu e-mail adresu",url:"Unesite ispravan URL.",date:"Unesite ispravan datum.",dateISO:"Unesite ispravan datum (ISO).",number:"Unesite ispravan broj.",digits:"Unesite samo cifre.",creditcard:"Unesite ispravan broj kreditne kartice.",equalTo:"Unesite istu vrednost ponovo.",extension:"Unesite vrednost sa odgovarajućom ekstenzijom.",maxlength:a.validator.format("Unesite manje od {0} karaktera."),minlength:a.validator.format("Unesite barem {0} karaktera."),rangelength:a.validator.format("Unesite vrednost dugačku između {0} i {1} karaktera."),range:a.validator.format("Unesite vrednost između {0} i {1}."),max:a.validator.format("Unesite vrednost manju ili jednaku {0}."),min:a.validator.format("Unesite vrednost veću ili jednaku {0}."),step:a.validator.format("Unesite vrednost koja je umnožak broja {0}.")}),a});