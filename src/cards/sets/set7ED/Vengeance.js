"use strict";
const Constants = require ("../../../Constants");
const VengeanceBase = require("../set8ED/Vengeance");

class Vengeance extends VengeanceBase {
  constructor (game) {
    super(game, "Vengeance", "Seventh Edition", "7ED");
  }
}

module.exports = Vengeance;
