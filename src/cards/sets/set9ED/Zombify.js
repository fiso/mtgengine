"use strict";
const Constants = require ("../../../Constants");
const ZombifyBase = require("../setARC/Zombify");

class Zombify extends ZombifyBase {
  constructor (game) {
    super(game, "Zombify", "Ninth Edition", "9ED");
  }
}

module.exports = Zombify;
