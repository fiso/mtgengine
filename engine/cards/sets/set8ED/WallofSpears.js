"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofSpearsBase = require("../setATQ/WallofSpears.js");

class WallofSpears extends WallofSpearsBase {
  constructor(game) {
    super(game, "Wall of Spears", "Eighth Edition", "8ED");
  }
}

module.exports = WallofSpears;
