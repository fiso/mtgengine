"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aggression extends UnimplementedCard {
  constructor (game) {
    super(game, "Aggression", "Ice Age", "ICE");
  }
}

module.exports = Aggression;
