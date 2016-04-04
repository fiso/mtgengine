"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shrink extends UnimplementedCard {
  constructor(game) {
    super(game, "Shrink", "Fifth Edition", "5ED");
  }
}

module.exports = Shrink;
