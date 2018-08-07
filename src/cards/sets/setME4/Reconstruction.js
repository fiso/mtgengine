"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reconstruction extends UnimplementedCard {
  constructor (game) {
    super(game, "Reconstruction", "Masters Edition IV", "ME4");
  }
}

module.exports = Reconstruction;
