"use strict";
const Constants = require ("../../../Constants");
const GoblinChariotBase = require("../set8ED/GoblinChariot");

class GoblinChariot extends GoblinChariotBase {
  constructor (game) {
    super(game, "Goblin Chariot", "Starter 1999", "S99");
  }
}

module.exports = GoblinChariot;
