"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartwoodStoryteller extends UnimplementedCard {
  constructor(game) {
    super(game, "Heartwood Storyteller", "Future Sight", "FUT");
  }
}

module.exports = HeartwoodStoryteller;
