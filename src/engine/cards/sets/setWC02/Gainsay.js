"use strict";
const Constants = require ("../../../Constants");
const GainsayBase = require("../setTHS/Gainsay");

class Gainsay extends GainsayBase {
  constructor (game) {
    super(game, "Gainsay", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Gainsay;
