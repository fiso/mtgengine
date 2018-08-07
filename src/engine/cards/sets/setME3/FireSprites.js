"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireSprites extends UnimplementedCard {
  constructor (game) {
    super(game, "Fire Sprites", "Masters Edition III", "ME3");
  }
}

module.exports = FireSprites;
