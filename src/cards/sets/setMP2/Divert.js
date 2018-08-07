"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Divert extends UnimplementedCard {
  constructor (game) {
    super(game, "Divert", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Divert;
