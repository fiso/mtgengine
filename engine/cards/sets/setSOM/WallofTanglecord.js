"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofTanglecord extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Tanglecord", "Scars of Mirrodin", "SOM");
  }
}

module.exports = WallofTanglecord;
