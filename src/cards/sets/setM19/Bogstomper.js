"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bogstomper extends UnimplementedCard {
  constructor (game) {
    super(game, "Bogstomper", "Core Set 2019", "M19");
  }
}

module.exports = Bogstomper;
