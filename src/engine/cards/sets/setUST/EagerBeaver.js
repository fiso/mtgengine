"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EagerBeaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Eager Beaver", "Unstable", "UST");
  }
}

module.exports = EagerBeaver;
