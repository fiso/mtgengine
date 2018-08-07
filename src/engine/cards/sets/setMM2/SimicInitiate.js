"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimicInitiate extends UnimplementedCard {
  constructor (game) {
    super(game, "Simic Initiate", "Modern Masters 2015", "MM2");
  }
}

module.exports = SimicInitiate;
