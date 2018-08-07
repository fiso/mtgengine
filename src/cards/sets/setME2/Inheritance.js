"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Inheritance extends UnimplementedCard {
  constructor (game) {
    super(game, "Inheritance", "Masters Edition II", "ME2");
  }
}

module.exports = Inheritance;
