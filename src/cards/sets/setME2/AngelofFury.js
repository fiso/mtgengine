"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelofFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel of Fury", "Masters Edition II", "ME2");
  }
}

module.exports = AngelofFury;
