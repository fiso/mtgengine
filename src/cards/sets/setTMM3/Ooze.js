"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ooze extends UnimplementedCard {
  constructor (game) {
    super(game, "Ooze", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Ooze;
