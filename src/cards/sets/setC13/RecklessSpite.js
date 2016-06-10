"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessSpite extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Spite", "Commander 2013 Edition", "C13");
  }
}

module.exports = RecklessSpite;
