"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Terminate extends UnimplementedCard {
  constructor (game) {
    super(game, "Terminate", "Commander 2017", "C17");
  }
}

module.exports = Terminate;
