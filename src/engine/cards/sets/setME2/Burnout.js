"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Burnout extends UnimplementedCard {
  constructor (game) {
    super(game, "Burnout", "Masters Edition II", "ME2");
  }
}

module.exports = Burnout;
