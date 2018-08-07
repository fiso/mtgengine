"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoomCannon extends UnimplementedCard {
  constructor (game) {
    super(game, "Doom Cannon", "Onslaught", "ONS");
  }
}

module.exports = DoomCannon;
