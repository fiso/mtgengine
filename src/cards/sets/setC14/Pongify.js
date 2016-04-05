"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pongify extends UnimplementedCard {
  constructor(game) {
    super(game, "Pongify", "Commander 2014", "C14");
  }
}

module.exports = Pongify;
