"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimicInitiate extends UnimplementedCard {
  constructor(game) {
    super(game, "Simic Initiate", "Dissension", "DIS");
  }
}

module.exports = SimicInitiate;
