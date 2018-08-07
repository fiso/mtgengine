"use strict";
const Constants = require ("../../../Constants");
const EldraziScionBase = require("../setDDR/EldraziScion");

class EldraziScion extends EldraziScionBase {
  constructor (game) {
    super(game, "Eldrazi Scion", "Battle for Zendikar Tokens", "TBFZ");
  }
}

module.exports = EldraziScion;
