"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrothersofFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Brothers of Fire", "Fifth Edition", "5ED");
  }
}

module.exports = BrothersofFire;
