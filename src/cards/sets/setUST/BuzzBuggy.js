"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BuzzBuggy extends UnimplementedCard {
  constructor (game) {
    super(game, "Buzz Buggy", "Unstable", "UST");
  }
}

module.exports = BuzzBuggy;
