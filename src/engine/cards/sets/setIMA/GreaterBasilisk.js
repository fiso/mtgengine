"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterBasilisk extends UnimplementedCard {
  constructor (game) {
    super(game, "Greater Basilisk", "Iconic Masters", "IMA");
  }
}

module.exports = GreaterBasilisk;
