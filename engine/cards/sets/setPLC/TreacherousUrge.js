"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreacherousUrge extends UnimplementedCard {
  constructor(game) {
    super(game, "Treacherous Urge", "Planar Chaos", "PLC");
  }
}

module.exports = TreacherousUrge;
