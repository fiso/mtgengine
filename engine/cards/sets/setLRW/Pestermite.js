"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pestermite extends Card {
  constructor(game) {
    super(game, "Pestermite", "Lorwyn", "LRW");
  }
}

module.exports = Pestermite;
