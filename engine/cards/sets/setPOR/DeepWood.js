"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepWood extends UnimplementedCard {
  constructor(game) {
    super(game, "Deep Wood", "Portal", "POR");
  }
}

module.exports = DeepWood;
