"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Infuse extends UnimplementedCard {
  constructor (game) {
    super(game, "Infuse", "Ice Age", "ICE");
  }
}

module.exports = Infuse;
