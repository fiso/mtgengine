"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MountedArchers extends Card {
  constructor(game) {
    super(game, "Mounted Archers", "Tempest", "TMP");
  }
}

module.exports = MountedArchers;
