"use strict";
const Constants = require ("../../../Constants");
const BirdsofParadiseBase = require("../set6ED/BirdsofParadise");

class BirdsofParadise extends BirdsofParadiseBase {
  constructor (game) {
    super(game, "Birds of Paradise", "Magic 2011", "M11");
  }
}

module.exports = BirdsofParadise;
