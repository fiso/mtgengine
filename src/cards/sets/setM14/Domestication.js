"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Domestication extends UnimplementedCard {
  constructor (game) {
    super(game, "Domestication", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Domestication;
