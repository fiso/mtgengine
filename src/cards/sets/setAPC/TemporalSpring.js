"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalSpring extends UnimplementedCard {
  constructor (game) {
    super(game, "Temporal Spring", "Apocalypse", "APC");
  }
}

module.exports = TemporalSpring;
