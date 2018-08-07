"use strict";
const Constants = require ("../../../Constants");
const BurningVengeanceBase = require("../setEMA/BurningVengeance");

class BurningVengeance extends BurningVengeanceBase {
  constructor (game) {
    super(game, "Burning Vengeance", "Innistrad", "ISD");
  }
}

module.exports = BurningVengeance;
