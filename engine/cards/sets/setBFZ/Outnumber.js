"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Outnumber extends UnimplementedCard {
  constructor(game) {
    super(game, "Outnumber", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Outnumber;
