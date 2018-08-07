"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofSwords extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Swords", "Magic 2014", "M14");
  }
}

module.exports = WallofSwords;
