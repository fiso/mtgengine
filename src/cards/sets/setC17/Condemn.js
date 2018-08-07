"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Condemn extends UnimplementedCard {
  constructor (game) {
    super(game, "Condemn", "Commander 2017", "C17");
  }
}

module.exports = Condemn;
