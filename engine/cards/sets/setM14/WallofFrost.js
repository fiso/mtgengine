"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofFrostBase = require("../setM10/WallofFrost.js");

class WallofFrost extends WallofFrostBase {
  constructor(game) {
    super(game, "Wall of Frost", "Magic 2014 Core Set", "M14");
  }
}

module.exports = WallofFrost;
