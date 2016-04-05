"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterHealer extends UnimplementedCard {
  constructor(game) {
    super(game, "Master Healer", "Eighth Edition", "8ED");
  }
}

module.exports = MasterHealer;
