"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hatred extends UnimplementedCard {
  constructor (game) {
    super(game, "Hatred", "Exodus", "EXO");
  }
}

module.exports = Hatred;
