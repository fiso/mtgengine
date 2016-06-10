"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BondedFetch extends UnimplementedCard {
  constructor (game) {
    super(game, "Bonded Fetch", "Future Sight", "FUT");
  }
}

module.exports = BondedFetch;
