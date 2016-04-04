"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChoMannosBlessing extends Card {
  constructor(game) {
    super(game, "Cho-Manno's Blessing", "Mercadian Masques", "MMQ");
  }
}

module.exports = ChoMannosBlessing;
