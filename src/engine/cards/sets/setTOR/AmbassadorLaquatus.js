"use strict";
const Constants = require ("../../../Constants");
const AmbassadorLaquatusBase = require("../set10E/AmbassadorLaquatus");

class AmbassadorLaquatus extends AmbassadorLaquatusBase {
  constructor (game) {
    super(game, "Ambassador Laquatus", "Torment", "TOR");
  }
}

module.exports = AmbassadorLaquatus;
