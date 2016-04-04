"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeedleDrop extends Card {
  constructor(game) {
    super(game, "Needle Drop", "Lorwyn", "LRW");
  }
}

module.exports = NeedleDrop;
