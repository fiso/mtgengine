"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonringIsland extends UnimplementedCard {
  constructor (game) {
    super(game, "Moonring Island", "Shadowmoor", "SHM");
  }
}

module.exports = MoonringIsland;
