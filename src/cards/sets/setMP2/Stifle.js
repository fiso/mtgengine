"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stifle extends UnimplementedCard {
  constructor (game) {
    super(game, "Stifle", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Stifle;
