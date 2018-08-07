"use strict";
const Constants = require ("../../../Constants");
const TranquilCoveBase = require("../setC18/TranquilCove");

class TranquilCove extends TranquilCoveBase {
  constructor (game) {
    super(game, "Tranquil Cove", "Khans of Tarkir", "KTK");
  }
}

module.exports = TranquilCove;
