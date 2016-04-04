"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneCalendar extends Card {
  constructor(game) {
    super(game, "Stone Calendar", "Masters Edition", "MED");
  }
}

module.exports = StoneCalendar;
