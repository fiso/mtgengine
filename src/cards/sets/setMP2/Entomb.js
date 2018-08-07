"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Entomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Entomb", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Entomb;
