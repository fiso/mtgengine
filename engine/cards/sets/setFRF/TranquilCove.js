"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TranquilCoveBase = require("../setDDQ/TranquilCove.js");

class TranquilCove extends TranquilCoveBase {
  constructor(game) {
    super(game, "Tranquil Cove", "Fate Reforged", "FRF");
  }
}

module.exports = TranquilCove;
