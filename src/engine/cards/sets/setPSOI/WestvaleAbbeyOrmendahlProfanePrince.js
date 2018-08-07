"use strict";
const Constants = require ("../../../Constants");
const WestvaleAbbeyOrmendahlProfanePrinceBase = require("../setSOI/WestvaleAbbeyOrmendahlProfanePrince");

class WestvaleAbbeyOrmendahlProfanePrince extends WestvaleAbbeyOrmendahlProfanePrinceBase {
  constructor (game) {
    super(game, "Westvale Abbey // Ormendahl, Profane Prince", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = WestvaleAbbeyOrmendahlProfanePrince;
