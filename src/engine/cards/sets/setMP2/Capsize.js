"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Capsize extends UnimplementedCard {
  constructor (game) {
    super(game, "Capsize", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Capsize;
