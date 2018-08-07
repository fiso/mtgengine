"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReliefCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Relief Captain", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = ReliefCaptain;
