"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneCalendar extends UnimplementedCard {
  constructor(game) {
    super(game, "Stone Calendar", "Masters Edition", "MED");
  }
}

module.exports = StoneCalendar;
