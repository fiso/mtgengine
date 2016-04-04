"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreadReaper extends Card {
  constructor(game) {
    super(game, "Dread Reaper", "Masters Edition IV", "ME4");
  }
}

module.exports = DreadReaper;
