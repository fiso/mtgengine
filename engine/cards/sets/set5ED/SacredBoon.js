"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredBoon extends UnimplementedCard {
  constructor(game) {
    super(game, "Sacred Boon", "Fifth Edition", "5ED");
  }
}

module.exports = SacredBoon;
