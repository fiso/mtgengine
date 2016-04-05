"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MannichitheFeveredDream extends UnimplementedCard {
  constructor(game) {
    super(game, "Mannichi, the Fevered Dream", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MannichitheFeveredDream;
