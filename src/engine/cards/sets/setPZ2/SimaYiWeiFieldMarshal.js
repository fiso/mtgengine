"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimaYiWeiFieldMarshal extends UnimplementedCard {
  constructor (game) {
    super(game, "Sima Yi, Wei Field Marshal", "You Make the Cube", "PZ2");
  }
}

module.exports = SimaYiWeiFieldMarshal;
