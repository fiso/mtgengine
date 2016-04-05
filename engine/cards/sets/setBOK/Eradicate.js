"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Eradicate extends UnimplementedCard {
  constructor(game) {
    super(game, "Eradicate", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Eradicate;
