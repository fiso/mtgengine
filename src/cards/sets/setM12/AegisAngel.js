"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AegisAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Aegis Angel", "Magic 2012", "M12");
  }
}

module.exports = AegisAngel;
