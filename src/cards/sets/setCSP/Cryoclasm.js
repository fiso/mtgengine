"use strict";
const Constants = require ("../../../Constants");
const CryoclasmBase = require("../set10E/Cryoclasm");

class Cryoclasm extends CryoclasmBase {
  constructor (game) {
    super(game, "Cryoclasm", "Coldsnap", "CSP");
  }
}

module.exports = Cryoclasm;
