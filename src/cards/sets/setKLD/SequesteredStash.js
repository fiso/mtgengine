"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SequesteredStash extends UnimplementedCard {
  constructor (game) {
    super(game, "Sequestered Stash", "Kaladesh", "KLD");
  }
}

module.exports = SequesteredStash;
