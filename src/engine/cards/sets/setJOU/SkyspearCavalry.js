"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyspearCavalry extends UnimplementedCard {
  constructor (game) {
    super(game, "Skyspear Cavalry", "Journey into Nyx", "JOU");
  }
}

module.exports = SkyspearCavalry;
