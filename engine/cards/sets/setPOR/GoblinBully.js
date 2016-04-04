"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinBullyBase = require("../setME4/GoblinBully.js");

class GoblinBully extends GoblinBullyBase {
  constructor(game) {
    super(game, "Goblin Bully", "Portal", "POR");
  }
}

module.exports = GoblinBully;
