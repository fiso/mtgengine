"use strict";
const Constants = require ("../../../Constants");
const AugurofBolasBase = require("../setC13/AugurofBolas");

class AugurofBolas extends AugurofBolasBase {
  constructor (game) {
    super(game, "Augur of Bolas", "Magic 2013", "M13");
  }
}

module.exports = AugurofBolas;
