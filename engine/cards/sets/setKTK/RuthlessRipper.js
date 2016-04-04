"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RuthlessRipper extends Card {
  constructor(game) {
    super(game, "Ruthless Ripper", "Khans of Tarkir", "KTK");
  }
}

module.exports = RuthlessRipper;
