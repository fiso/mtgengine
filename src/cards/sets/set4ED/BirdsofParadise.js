"use strict";
const Constants = require ("../../../Constants");
const BirdsofParadiseBase = require("../setCN2/BirdsofParadise");

class BirdsofParadise extends BirdsofParadiseBase {
  constructor (game) {
    super(game, "Birds of Paradise", "Fourth Edition", "4ED");
  }
}

module.exports = BirdsofParadise;
