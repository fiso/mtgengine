"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireSprites extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire Sprites", "Legends", "LEG");
  }
}

module.exports = FireSprites;
