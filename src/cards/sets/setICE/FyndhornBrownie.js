"use strict";
const Constants = require ("../../../Constants");
const FyndhornBrownieBase = require("../set6ED/FyndhornBrownie");

class FyndhornBrownie extends FyndhornBrownieBase {
  constructor (game) {
    super(game, "Fyndhorn Brownie", "Ice Age", "ICE");
  }
}

module.exports = FyndhornBrownie;
