"use strict";
const Constants = require ("../../../Constants");
const BirdsofParadiseBase = require("../set6ED/BirdsofParadise");

class BirdsofParadise extends BirdsofParadiseBase {
  constructor (game) {
    super(game, "Birds of Paradise", "Revised Edition", "3ED");
  }
}

module.exports = BirdsofParadise;
