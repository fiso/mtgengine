"use strict";
const Constants = require ("../../../Constants");
const EldraziScionBase = require("../setDDR/EldraziScion");

class EldraziScion extends EldraziScionBase {
  constructor (game) {
    super(game, "Eldrazi Scion", "Oath of the Gatewatch Tokens", "TOGW");
  }
}

module.exports = EldraziScion;
