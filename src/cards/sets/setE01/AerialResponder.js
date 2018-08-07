"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AerialResponder extends UnimplementedCard {
  constructor (game) {
    super(game, "Aerial Responder", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = AerialResponder;
