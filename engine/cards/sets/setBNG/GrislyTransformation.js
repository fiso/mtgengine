"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrislyTransformation extends Card {
  constructor(game) {
    super(game, "Grisly Transformation", "Born of the Gods", "BNG");
  }
}

module.exports = GrislyTransformation;
