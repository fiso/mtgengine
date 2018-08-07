"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Monkey extends UnimplementedCard {
  constructor (game) {
    super(game, "Monkey-", "Unstable", "UST");
  }
}

module.exports = Monkey;
