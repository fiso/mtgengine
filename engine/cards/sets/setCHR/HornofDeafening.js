"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HornofDeafening extends Card {
  constructor(game) {
    super(game, "Horn of Deafening", "Chronicles", "CHR");
  }
}

module.exports = HornofDeafening;
