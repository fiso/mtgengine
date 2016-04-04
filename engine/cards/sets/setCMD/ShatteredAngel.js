"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShatteredAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Shattered Angel", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ShatteredAngel;
