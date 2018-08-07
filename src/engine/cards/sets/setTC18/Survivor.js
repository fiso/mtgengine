"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Survivor extends UnimplementedCard {
  constructor (game) {
    super(game, "Survivor", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Survivor;
