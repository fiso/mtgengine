"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Errantry extends UnimplementedCard {
  constructor (game) {
    super(game, "Errantry", "Masters Edition II", "ME2");
  }
}

module.exports = Errantry;
