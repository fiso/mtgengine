"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Seraph extends UnimplementedCard {
  constructor (game) {
    super(game, "Seraph", "Fifth Edition", "5ED");
  }
}

module.exports = Seraph;
