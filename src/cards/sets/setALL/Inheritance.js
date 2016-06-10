"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Inheritance extends UnimplementedCard {
  constructor (game) {
    super(game, "Inheritance", "Alliances", "ALL");
  }
}

module.exports = Inheritance;
