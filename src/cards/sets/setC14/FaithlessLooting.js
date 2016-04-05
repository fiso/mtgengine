"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaithlessLooting extends UnimplementedCard {
  constructor(game) {
    super(game, "Faithless Looting", "Commander 2014", "C14");
  }
}

module.exports = FaithlessLooting;
