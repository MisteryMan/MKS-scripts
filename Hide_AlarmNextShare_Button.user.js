// ==UserScript==
// @name         Hide Alarm-Next-Share Button
// @version      0.1
// @description  Hides the upper Alarm-Next-Share Button
// @author       Jrh1997
// @include        /^https?:\/\/[www.]*(?:leitstellenspiel\.de|missionchief\.co\.uk|missionchief\.com|meldkamerspel\.com|centro-de-mando\.es|missionchief-australia\.com|larmcentralen-spelet\.se|operatorratunkowy\.pl|operatore112\.it|operateur112\.fr|dispetcher112\.ru|alarmcentral-spil\.dk|nodsentralspillet\.com|operacni-stredisko\.cz|112-merkez\.com|jogo-operador112\.com|operador193\.com|centro-de-mando\.mx|dyspetcher101-game\.com|missionchief-japan\.com|hatakeskuspeli\.com|missionchief-korea\.com|jocdispecerat112\.com|dispecerske-centrum\.com)\/missions\/.*$/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $("#dispatch_buttons").find(".alert_next_alliance").addClass('hidden');

})();
