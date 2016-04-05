"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaisetheAlarm extends UnimplementedCard {
  constructor(game) {
    super(game, "Raise the Alarm", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = RaisetheAlarm;
