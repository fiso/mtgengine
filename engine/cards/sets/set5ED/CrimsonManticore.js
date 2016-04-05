"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrimsonManticore extends UnimplementedCard {
  constructor(game) {
    super(game, "Crimson Manticore", "Fifth Edition", "5ED");
  }
}

module.exports = CrimsonManticore;
