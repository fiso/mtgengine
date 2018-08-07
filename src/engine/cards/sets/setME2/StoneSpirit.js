"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone Spirit", "Masters Edition II", "ME2");
  }
}

module.exports = StoneSpirit;
