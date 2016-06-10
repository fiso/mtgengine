"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofTorches extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Torches", "Magic 2012", "M12");
  }
}

module.exports = WallofTorches;
