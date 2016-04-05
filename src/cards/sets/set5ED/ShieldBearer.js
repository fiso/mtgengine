"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldBearer extends UnimplementedCard {
  constructor(game) {
    super(game, "Shield Bearer", "Fifth Edition", "5ED");
  }
}

module.exports = ShieldBearer;
