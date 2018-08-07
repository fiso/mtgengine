"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LogicKnot extends UnimplementedCard {
  constructor (game) {
    super(game, "Logic Knot", "Modern Masters", "MMA");
  }
}

module.exports = LogicKnot;
