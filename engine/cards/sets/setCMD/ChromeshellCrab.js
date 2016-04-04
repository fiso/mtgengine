"use strict";
const Constants = require ("../../../Constants");
const ChromeshellCrabBase = require("../setLGN/ChromeshellCrab");

class ChromeshellCrab extends ChromeshellCrabBase {
  constructor(game) {
    super(game, "Chromeshell Crab", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ChromeshellCrab;
