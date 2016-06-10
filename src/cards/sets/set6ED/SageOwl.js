"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SageOwl extends UnimplementedCard {
  constructor (game) {
    super(game, "Sage Owl", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SageOwl;
