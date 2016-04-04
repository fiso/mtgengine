"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImRubberYoureGlue extends Card {
  constructor(game) {
    super(game, "I'm Rubber, You're Glue", "Unglued", "UGL");
  }
}

module.exports = ImRubberYoureGlue;
