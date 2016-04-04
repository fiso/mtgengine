"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GameTrailChangeling extends Card {
  constructor(game) {
    super(game, "Game-Trail Changeling", "Morningtide", "MOR");
  }
}

module.exports = GameTrailChangeling;
