"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThranLens extends UnimplementedCard {
  constructor(game) {
    super(game, "Thran Lens", "Urza's Legacy", "ULG");
  }
}

module.exports = ThranLens;
