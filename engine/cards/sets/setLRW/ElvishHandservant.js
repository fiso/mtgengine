"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishHandservant extends Card {
  constructor(game) {
    super(game, "Elvish Handservant", "Lorwyn", "LRW");
  }
}

module.exports = ElvishHandservant;
