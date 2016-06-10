"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastThoughts extends UnimplementedCard {
  constructor (game) {
    super(game, "Last Thoughts", "Gatecrash", "GTC");
  }
}

module.exports = LastThoughts;
