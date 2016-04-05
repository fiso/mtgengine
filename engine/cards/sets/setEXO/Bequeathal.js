"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bequeathal extends UnimplementedCard {
  constructor(game) {
    super(game, "Bequeathal", "Exodus", "EXO");
  }
}

module.exports = Bequeathal;
