"use strict";
const Constants = require ("../../../Constants");
const TranquilCoveBase = require("../setC18/TranquilCove");

class TranquilCove extends TranquilCoveBase {
  constructor (game) {
    super(game, "Tranquil Cove", "Eternal Masters", "EMA");
  }
}

module.exports = TranquilCove;
