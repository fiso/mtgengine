"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldBearer extends UnimplementedCard {
  constructor (game) {
    super(game, "Shield Bearer", "Masters Edition II", "ME2");
  }
}

module.exports = ShieldBearer;
