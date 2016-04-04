"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BirdsofParadiseBase = require("../set6ED/BirdsofParadise.js");

class BirdsofParadise extends BirdsofParadiseBase {
  constructor(game) {
    super(game, "Birds of Paradise", "Limited Edition Beta", "LEB");
  }
}

module.exports = BirdsofParadise;
