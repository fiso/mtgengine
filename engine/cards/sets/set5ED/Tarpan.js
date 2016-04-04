"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tarpan extends UnimplementedCard {
  constructor(game) {
    super(game, "Tarpan", "Fifth Edition", "5ED");
  }
}

module.exports = Tarpan;
