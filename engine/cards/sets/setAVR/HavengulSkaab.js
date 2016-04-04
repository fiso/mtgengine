"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HavengulSkaab extends Card {
  constructor(game) {
    super(game, "Havengul Skaab", "Avacyn Restored", "AVR");
  }
}

module.exports = HavengulSkaab;
