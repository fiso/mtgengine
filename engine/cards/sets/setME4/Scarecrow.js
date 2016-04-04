"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scarecrow extends UnimplementedCard {
  constructor(game) {
    super(game, "Scarecrow", "Masters Edition IV", "ME4");
  }
}

module.exports = Scarecrow;
