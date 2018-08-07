"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Excoriate extends UnimplementedCard {
  constructor (game) {
    super(game, "Excoriate", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = Excoriate;
