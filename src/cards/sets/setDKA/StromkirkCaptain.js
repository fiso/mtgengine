"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StromkirkCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Stromkirk Captain", "Dark Ascension", "DKA");
  }
}

module.exports = StromkirkCaptain;
