"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArkofBlight extends UnimplementedCard {
  constructor (game) {
    super(game, "Ark of Blight", "Scourge", "SCG");
  }
}

module.exports = ArkofBlight;
