"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdarkarUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Adarkar Unicorn", "Ice Age", "ICE");
  }
}

module.exports = AdarkarUnicorn;
