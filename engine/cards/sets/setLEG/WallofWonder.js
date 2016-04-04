"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofWonderBase = require("../setCHR/WallofWonder.js");

class WallofWonder extends WallofWonderBase {
  constructor(game) {
    super(game, "Wall of Wonder", "Legends", "LEG");
  }
}

module.exports = WallofWonder;
