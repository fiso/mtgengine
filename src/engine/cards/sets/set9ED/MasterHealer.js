"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Master Healer", "Ninth Edition", "9ED");
  }
}

module.exports = MasterHealer;
