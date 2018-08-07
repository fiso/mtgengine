"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhenWillYouLearn extends UnimplementedCard {
  constructor (game) {
    super(game, "When Will You Learn?", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = WhenWillYouLearn;
