"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BroodingSaurian extends UnimplementedCard {
  constructor(game) {
    super(game, "Brooding Saurian", "Coldsnap", "CSP");
  }
}

module.exports = BroodingSaurian;
