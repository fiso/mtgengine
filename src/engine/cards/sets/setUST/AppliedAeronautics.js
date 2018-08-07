"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AppliedAeronautics extends UnimplementedCard {
  constructor (game) {
    super(game, "Applied Aeronautics", "Unstable", "UST");
  }
}

module.exports = AppliedAeronautics;
