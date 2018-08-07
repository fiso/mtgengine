"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenRuins extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Ruins", "Masters Edition II", "ME2");
  }
}

module.exports = DwarvenRuins;
