"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TranquilCoveBase = require("../setDDQ/TranquilCove.js");

class TranquilCove extends TranquilCoveBase {
  constructor(game) {
    super(game, "Tranquil Cove", "Khans of Tarkir", "KTK");
  }
}

module.exports = TranquilCove;
