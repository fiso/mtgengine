"use strict";
const Constants = require ("../../../Constants");
const StoneCalendarBase = require("../setMED/StoneCalendar");

class StoneCalendar extends StoneCalendarBase {
  constructor(game) {
    super(game, "Stone Calendar", "The Dark", "DRK");
  }
}

module.exports = StoneCalendar;
