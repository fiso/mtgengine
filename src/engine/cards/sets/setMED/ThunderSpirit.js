"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Thunder Spirit", "Masters Edition", "MED");
  }
}

module.exports = ThunderSpirit;
