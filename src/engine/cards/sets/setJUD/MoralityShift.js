"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoralityShift extends UnimplementedCard {
  constructor (game) {
    super(game, "Morality Shift", "Judgment", "JUD");
  }
}

module.exports = MoralityShift;
