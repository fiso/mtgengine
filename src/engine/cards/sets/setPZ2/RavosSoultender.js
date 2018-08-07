"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavosSoultender extends UnimplementedCard {
  constructor (game) {
    super(game, "Ravos, Soultender", "You Make the Cube", "PZ2");
  }
}

module.exports = RavosSoultender;
