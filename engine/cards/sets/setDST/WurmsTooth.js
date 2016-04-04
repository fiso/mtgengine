"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WurmsTooth extends Card {
  constructor(game) {
    super(game, "Wurm's Tooth", "Darksteel", "DST");
  }
}

module.exports = WurmsTooth;
