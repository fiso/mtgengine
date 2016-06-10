"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EliteInquisitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Elite Inquisitor", "Innistrad", "ISD");
  }
}

module.exports = EliteInquisitor;
