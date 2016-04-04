"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LensofClarity extends Card {
  constructor(game) {
    super(game, "Lens of Clarity", "Khans of Tarkir", "KTK");
  }
}

module.exports = LensofClarity;
