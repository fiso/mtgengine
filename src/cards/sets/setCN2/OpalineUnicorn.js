"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalineUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Opaline Unicorn", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = OpalineUnicorn;
