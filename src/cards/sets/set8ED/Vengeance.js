"use strict";
const Constants = require ("../../../Constants");
const VengeanceBase = require("../set9ED/Vengeance");

class Vengeance extends VengeanceBase {
  constructor (game) {
    super(game, "Vengeance", "Eighth Edition", "8ED");
  }
}

module.exports = Vengeance;
