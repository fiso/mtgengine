"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Thunder Spirit", "Legends", "LEG");
  }
}

module.exports = ThunderSpirit;
