"use strict";
const Constants = require ("../../../Constants");
const HecatombBase = require("../set6ED/Hecatomb");

class Hecatomb extends HecatombBase {
  constructor (game) {
    super(game, "Hecatomb", "Ice Age", "ICE");
  }
}

module.exports = Hecatomb;
