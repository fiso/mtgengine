"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sunder extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunder", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Sunder;
