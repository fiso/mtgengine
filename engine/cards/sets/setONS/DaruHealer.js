"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaruHealer extends Card {
  constructor(game) {
    super(game, "Daru Healer", "Onslaught", "ONS");
  }
}

module.exports = DaruHealer;
