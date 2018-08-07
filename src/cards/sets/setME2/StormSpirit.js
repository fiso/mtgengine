"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Storm Spirit", "Masters Edition II", "ME2");
  }
}

module.exports = StormSpirit;
