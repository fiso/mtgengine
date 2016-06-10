"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FyndhornPollen extends UnimplementedCard {
  constructor (game) {
    super(game, "Fyndhorn Pollen", "Ice Age", "ICE");
  }
}

module.exports = FyndhornPollen;
