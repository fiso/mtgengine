"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwiftSilence extends UnimplementedCard {
  constructor (game) {
    super(game, "Swift Silence", "Dissension", "DIS");
  }
}

module.exports = SwiftSilence;
