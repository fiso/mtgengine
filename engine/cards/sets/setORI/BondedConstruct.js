"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BondedConstruct extends UnimplementedCard {
  constructor(game) {
    super(game, "Bonded Construct", "Magic Origins", "ORI");
  }
}

module.exports = BondedConstruct;
