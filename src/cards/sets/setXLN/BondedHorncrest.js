"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BondedHorncrest extends UnimplementedCard {
  constructor (game) {
    super(game, "Bonded Horncrest", "Ixalan", "XLN");
  }
}

module.exports = BondedHorncrest;
