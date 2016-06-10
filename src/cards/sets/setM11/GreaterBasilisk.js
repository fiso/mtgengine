"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterBasilisk extends UnimplementedCard {
  constructor (game) {
    super(game, "Greater Basilisk", "Magic 2011", "M11");
  }
}

module.exports = GreaterBasilisk;
