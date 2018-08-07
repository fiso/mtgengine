"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CometStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Comet Storm", "Commander 2017", "C17");
  }
}

module.exports = CometStorm;
