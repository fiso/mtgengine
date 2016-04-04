"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Counterbalance extends UnimplementedCard {
  constructor(game) {
    super(game, "Counterbalance", "Coldsnap", "CSP");
  }
}

module.exports = Counterbalance;
