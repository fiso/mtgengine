"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RaisetheAlarm extends Card {
  constructor(game) {
    super(game, "Raise the Alarm", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = RaisetheAlarm;
