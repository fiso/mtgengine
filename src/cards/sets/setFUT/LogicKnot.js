"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LogicKnot extends UnimplementedCard {
  constructor (game) {
    super(game, "Logic Knot", "Future Sight", "FUT");
  }
}

module.exports = LogicKnot;
