"use strict";
const Constants = require ("../../../Constants");
const TakeVengeanceBase = require("../setMTGA/TakeVengeance");

class TakeVengeance extends TakeVengeanceBase {
  constructor (game) {
    super(game, "Take Vengeance", "Core Set 2019", "M19");
  }
}

module.exports = TakeVengeance;
