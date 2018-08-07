"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SageOwl extends UnimplementedCard {
  constructor (game) {
    super(game, "Sage Owl", "Magic 2010", "M10");
  }
}

module.exports = SageOwl;
