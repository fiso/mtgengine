"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofFireBase = require("../set6ED/WallofFire.js");

class WallofFire extends WallofFireBase {
  constructor(game) {
    super(game, "Wall of Fire", "Magic 2013", "M13");
  }
}

module.exports = WallofFire;
