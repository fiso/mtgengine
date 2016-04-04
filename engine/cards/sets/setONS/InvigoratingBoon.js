"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InvigoratingBoon extends Card {
  constructor(game) {
    super(game, "Invigorating Boon", "Onslaught", "ONS");
  }
}

module.exports = InvigoratingBoon;
