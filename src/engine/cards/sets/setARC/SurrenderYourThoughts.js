"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurrenderYourThoughts extends UnimplementedCard {
  constructor (game) {
    super(game, "Surrender Your Thoughts", "Archenemy", "ARC");
  }
}

module.exports = SurrenderYourThoughts;
