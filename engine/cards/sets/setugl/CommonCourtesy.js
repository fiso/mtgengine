"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CommonCourtesy extends Card {
  constructor(game) {
    super(game, "Common Courtesy", "Unglued", "UGL");
  }
}

module.exports = CommonCourtesy;
