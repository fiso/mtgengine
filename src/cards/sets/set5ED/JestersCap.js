"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JestersCap extends UnimplementedCard {
  constructor (game) {
    super(game, "Jester's Cap", "Fifth Edition", "5ED");
  }
}

module.exports = JestersCap;
