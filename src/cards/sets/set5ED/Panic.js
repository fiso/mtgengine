"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Panic extends UnimplementedCard {
  constructor(game) {
    super(game, "Panic", "Fifth Edition", "5ED");
  }
}

module.exports = Panic;
