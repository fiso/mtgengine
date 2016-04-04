"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofBlood extends Card {
  constructor(game) {
    super(game, "Wall of Blood", "Mirrodin", "MRD");
  }
}

module.exports = WallofBlood;
