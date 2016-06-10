"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Sea Drake", "Masters Edition II", "ME2");
  }
}

module.exports = SeaDrake;
