"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GriffinSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Griffin Sentinel", "Magic 2014", "M14");
  }
}

module.exports = GriffinSentinel;
