"use strict";
const Constants = require ("../../../Constants");
const BirdsofParadiseBase = require("../setCN2/BirdsofParadise");

class BirdsofParadise extends BirdsofParadiseBase {
  constructor (game) {
    super(game, "Birds of Paradise", "Seventh Edition", "7ED");
  }
}

module.exports = BirdsofParadise;
