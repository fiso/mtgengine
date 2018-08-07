"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReallyEpicPunch extends UnimplementedCard {
  constructor (game) {
    super(game, "Really Epic Punch", "Unstable", "UST");
  }
}

module.exports = ReallyEpicPunch;
