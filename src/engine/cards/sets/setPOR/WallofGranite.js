"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofGranite extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Granite", "Portal", "POR");
  }
}

module.exports = WallofGranite;
