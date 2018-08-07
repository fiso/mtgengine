"use strict";
const Constants = require ("../../../Constants");
const VenomBase = require("../set5ED/Venom");

class Venom extends VenomBase {
  constructor (game) {
    super(game, "Venom", "Fourth Edition", "4ED");
  }
}

module.exports = Venom;
