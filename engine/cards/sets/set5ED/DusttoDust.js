"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DusttoDust extends UnimplementedCard {
  constructor(game) {
    super(game, "Dust to Dust", "Fifth Edition", "5ED");
  }
}

module.exports = DusttoDust;
