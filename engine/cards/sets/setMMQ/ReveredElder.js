"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReveredElder extends Card {
  constructor(game) {
    super(game, "Revered Elder", "Mercadian Masques", "MMQ");
  }
}

module.exports = ReveredElder;
