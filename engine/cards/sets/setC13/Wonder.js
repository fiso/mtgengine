"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wonder extends UnimplementedCard {
  constructor(game) {
    super(game, "Wonder", "Commander 2013 Edition", "C13");
  }
}

module.exports = Wonder;
