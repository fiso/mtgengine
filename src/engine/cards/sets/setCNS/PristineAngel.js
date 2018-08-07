"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PristineAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Pristine Angel", "Conspiracy", "CNS");
  }
}

module.exports = PristineAngel;
