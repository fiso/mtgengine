"use strict";
const Constants = require ("../../../Constants");
const HammerhandBase = require("../setIMA/Hammerhand");

class Hammerhand extends HammerhandBase {
  constructor (game) {
    super(game, "Hammerhand", "Magic 2015", "M15");
  }
}

module.exports = Hammerhand;
