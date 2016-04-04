"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinRoughriderBase = require("../setM15/GoblinRoughrider.js");

class GoblinRoughrider extends GoblinRoughriderBase {
  constructor(game) {
    super(game, "Goblin Roughrider", "Worldwake", "WWK");
  }
}

module.exports = GoblinRoughrider;
