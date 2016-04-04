"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FyndhornBrownieBase = require("../set6ED/FyndhornBrownie.js");

class FyndhornBrownie extends FyndhornBrownieBase {
  constructor(game) {
    super(game, "Fyndhorn Brownie", "Ice Age", "ICE");
  }
}

module.exports = FyndhornBrownie;
