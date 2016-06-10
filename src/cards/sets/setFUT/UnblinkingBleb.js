"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnblinkingBleb extends UnimplementedCard {
  constructor (game) {
    super(game, "Unblinking Bleb", "Future Sight", "FUT");
  }
}

module.exports = UnblinkingBleb;
