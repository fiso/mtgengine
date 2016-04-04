"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StoneCalendarBase = require("../setMED/StoneCalendar.js");

class StoneCalendar extends StoneCalendarBase {
  constructor(game) {
    super(game, "Stone Calendar", "The Dark", "DRK");
  }
}

module.exports = StoneCalendar;
