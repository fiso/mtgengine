"use strict";
const Constants = require ("../../../Constants");
const TranquilCoveBase = require("../setDDQ/TranquilCove");

class TranquilCove extends TranquilCoveBase {
  constructor(game) {
    super(game, "Tranquil Cove", "Fate Reforged", "FRF");
  }
}

module.exports = TranquilCove;
