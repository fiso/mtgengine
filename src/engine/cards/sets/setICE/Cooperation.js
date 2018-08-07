"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cooperation extends UnimplementedCard {
  constructor (game) {
    super(game, "Cooperation", "Ice Age", "ICE");
  }
}

module.exports = Cooperation;
