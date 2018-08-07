"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarionetteMaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Marionette Master", "Kaladesh", "KLD");
  }
}

module.exports = MarionetteMaster;
