"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WorldatWar extends UnimplementedCard {
  constructor(game) {
    super(game, "World at War", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = WorldatWar;
