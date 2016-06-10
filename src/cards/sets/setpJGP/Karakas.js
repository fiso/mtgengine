"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Karakas extends UnimplementedCard {
  constructor (game) {
    super(game, "Karakas", "Judge Gift Program", "pJGP");
  }
}

module.exports = Karakas;
