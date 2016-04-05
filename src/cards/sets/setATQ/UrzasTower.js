"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasTower extends UnimplementedCard {
  constructor(game) {
    super(game, "Urza's Tower", "Antiquities", "ATQ");
  }
}

module.exports = UrzasTower;
