"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MireBoa extends UnimplementedCard {
  constructor(game) {
    super(game, "Mire Boa", "Planar Chaos", "PLC");
  }
}

module.exports = MireBoa;
