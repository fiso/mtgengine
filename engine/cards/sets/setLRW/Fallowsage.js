"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fallowsage extends Card {
  constructor(game) {
    super(game, "Fallowsage", "Lorwyn", "LRW");
  }
}

module.exports = Fallowsage;
