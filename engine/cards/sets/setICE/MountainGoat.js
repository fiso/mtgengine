"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MountainGoatBase = require("../set6ED/MountainGoat.js");

class MountainGoat extends MountainGoatBase {
  constructor(game) {
    super(game, "Mountain Goat", "Ice Age", "ICE");
  }
}

module.exports = MountainGoat;
