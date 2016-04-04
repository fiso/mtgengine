"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LunarMystic extends Card {
  constructor(game) {
    super(game, "Lunar Mystic", "Avacyn Restored", "AVR");
  }
}

module.exports = LunarMystic;
