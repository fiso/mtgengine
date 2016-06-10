"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GameTrailChangeling extends UnimplementedCard {
  constructor (game) {
    super(game, "Game-Trail Changeling", "Morningtide", "MOR");
  }
}

module.exports = GameTrailChangeling;
