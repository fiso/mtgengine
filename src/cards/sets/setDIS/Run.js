"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Run extends UnimplementedCard {
  constructor (game) {
    super(game, "Run", "Dissension", "DIS");
  }
}

module.exports = Run;
