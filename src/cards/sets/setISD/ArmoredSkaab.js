"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmoredSkaab extends UnimplementedCard {
  constructor(game) {
    super(game, "Armored Skaab", "Innistrad", "ISD");
  }
}

module.exports = ArmoredSkaab;
