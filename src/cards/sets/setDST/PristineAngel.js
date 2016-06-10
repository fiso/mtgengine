"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PristineAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Pristine Angel", "Darksteel", "DST");
  }
}

module.exports = PristineAngel;
