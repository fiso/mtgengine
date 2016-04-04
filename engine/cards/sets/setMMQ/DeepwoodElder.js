"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeepwoodElder extends Card {
  constructor(game) {
    super(game, "Deepwood Elder", "Mercadian Masques", "MMQ");
  }
}

module.exports = DeepwoodElder;
