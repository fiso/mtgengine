"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkedbyHonor extends UnimplementedCard {
  constructor(game) {
    super(game, "Marked by Honor", "Magic 2015 Core Set", "M15");
  }
}

module.exports = MarkedbyHonor;
