"use strict";
const Constants = require ("../../../Constants");
const ZombifyBase = require("../setA25/Zombify");

class Zombify extends ZombifyBase {
  constructor (game) {
    super(game, "Zombify", "Ninth Edition", "9ED");
  }
}

module.exports = Zombify;
