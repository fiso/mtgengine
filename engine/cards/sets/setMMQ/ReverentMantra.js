"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReverentMantra extends Card {
  constructor(game) {
    super(game, "Reverent Mantra", "Mercadian Masques", "MMQ");
  }
}

module.exports = ReverentMantra;
