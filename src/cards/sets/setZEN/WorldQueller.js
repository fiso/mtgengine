"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WorldQueller extends UnimplementedCard {
  constructor(game) {
    super(game, "World Queller", "Zendikar", "ZEN");
  }
}

module.exports = WorldQueller;
