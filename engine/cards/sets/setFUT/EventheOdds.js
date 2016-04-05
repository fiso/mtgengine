"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EventheOdds extends UnimplementedCard {
  constructor(game) {
    super(game, "Even the Odds", "Future Sight", "FUT");
  }
}

module.exports = EventheOdds;
