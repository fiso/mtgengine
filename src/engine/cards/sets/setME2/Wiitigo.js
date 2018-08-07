"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wiitigo extends UnimplementedCard {
  constructor (game) {
    super(game, "Wiitigo", "Masters Edition II", "ME2");
  }
}

module.exports = Wiitigo;
