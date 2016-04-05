"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImRubberYoureGlue extends UnimplementedCard {
  constructor(game) {
    super(game, "I'm Rubber, You're Glue", "Unglued", "UGL");
  }
}

module.exports = ImRubberYoureGlue;
