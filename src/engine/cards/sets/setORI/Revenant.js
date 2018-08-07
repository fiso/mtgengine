"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Revenant extends UnimplementedCard {
  constructor (game) {
    super(game, "Revenant", "Magic Origins", "ORI");
  }
}

module.exports = Revenant;
