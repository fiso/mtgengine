"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanBasilisk extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Basilisk", "Tenth Edition", "10E");
  }
}

module.exports = SylvanBasilisk;
