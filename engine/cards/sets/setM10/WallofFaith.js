"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofFaith extends Card {
  constructor(game) {
    super(game, "Wall of Faith", "Magic 2010", "M10");
  }
}

module.exports = WallofFaith;
