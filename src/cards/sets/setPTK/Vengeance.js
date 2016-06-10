"use strict";
const Constants = require ("../../../Constants");
const VengeanceBase = require("../set8ED/Vengeance");

class Vengeance extends VengeanceBase {
  constructor (game) {
    super(game, "Vengeance", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = Vengeance;
