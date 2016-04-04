"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BirdsofParadiseBase = require("../set6ED/BirdsofParadise.js");

class BirdsofParadise extends BirdsofParadiseBase {
  constructor(game) {
    super(game, "Birds of Paradise", "Magic 2010", "M10");
  }
}

module.exports = BirdsofParadise;
