"use strict";
const Constants = require ("../../../Constants");
const UnseenWalkerBase = require("../set6ED/UnseenWalker");

class UnseenWalker extends UnseenWalkerBase {
  constructor (game) {
    super(game, "Unseen Walker", "Mirage", "MIR");
  }
}

module.exports = UnseenWalker;
