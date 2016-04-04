"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FadefromMemory extends Card {
  constructor(game) {
    super(game, "Fade from Memory", "Onslaught", "ONS");
  }
}

module.exports = FadefromMemory;
