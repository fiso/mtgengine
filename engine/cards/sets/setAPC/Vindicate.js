"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vindicate extends Card {
  constructor(game) {
    super(game, "Vindicate", "Apocalypse", "APC");
  }
}

module.exports = Vindicate;
