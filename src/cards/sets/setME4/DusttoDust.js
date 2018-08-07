"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DusttoDust extends UnimplementedCard {
  constructor (game) {
    super(game, "Dust to Dust", "Masters Edition IV", "ME4");
  }
}

module.exports = DusttoDust;
