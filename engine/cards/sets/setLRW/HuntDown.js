"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntDown extends Card {
  constructor(game) {
    super(game, "Hunt Down", "Lorwyn", "LRW");
  }
}

module.exports = HuntDown;
