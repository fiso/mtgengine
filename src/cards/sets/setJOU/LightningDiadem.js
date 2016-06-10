"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningDiadem extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Diadem", "Journey into Nyx", "JOU");
  }
}

module.exports = LightningDiadem;
