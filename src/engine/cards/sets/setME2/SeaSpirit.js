"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Sea Spirit", "Masters Edition II", "ME2");
  }
}

module.exports = SeaSpirit;
