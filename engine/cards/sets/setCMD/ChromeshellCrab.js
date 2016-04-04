"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChromeshellCrabBase = require("../setLGN/ChromeshellCrab.js");

class ChromeshellCrab extends ChromeshellCrabBase {
  constructor(game) {
    super(game, "Chromeshell Crab", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ChromeshellCrab;
