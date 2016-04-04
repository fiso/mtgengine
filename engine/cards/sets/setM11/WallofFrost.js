"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofFrostBase = require("../setM10/WallofFrost.js");

class WallofFrost extends WallofFrostBase {
  constructor(game) {
    super(game, "Wall of Frost", "Magic 2011", "M11");
  }
}

module.exports = WallofFrost;
