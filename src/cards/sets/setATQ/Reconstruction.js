"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reconstruction extends UnimplementedCard {
  constructor(game) {
    super(game, "Reconstruction", "Antiquities", "ATQ");
  }
}

module.exports = Reconstruction;
