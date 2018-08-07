"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RustedSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Rusted Sentinel", "Magic 2012", "M12");
  }
}

module.exports = RustedSentinel;
