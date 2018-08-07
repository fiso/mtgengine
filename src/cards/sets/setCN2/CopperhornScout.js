"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopperhornScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Copperhorn Scout", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = CopperhornScout;
