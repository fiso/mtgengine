"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FoothillGuide extends Card {
  constructor(game) {
    super(game, "Foothill Guide", "Onslaught", "ONS");
  }
}

module.exports = FoothillGuide;
