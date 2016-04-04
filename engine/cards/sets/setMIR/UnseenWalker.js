"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnseenWalkerBase = require("../set6ED/UnseenWalker.js");

class UnseenWalker extends UnseenWalkerBase {
  constructor(game) {
    super(game, "Unseen Walker", "Mirage", "MIR");
  }
}

module.exports = UnseenWalker;
