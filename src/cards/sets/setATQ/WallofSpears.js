"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofSpears extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Spears", "Antiquities", "ATQ");
  }
}

module.exports = WallofSpears;
