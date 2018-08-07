"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshBoa extends UnimplementedCard {
  constructor (game) {
    super(game, "Marsh Boa", "Prophecy", "PCY");
  }
}

module.exports = MarshBoa;
