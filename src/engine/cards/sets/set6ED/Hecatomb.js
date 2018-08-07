"use strict";
const Constants = require ("../../../Constants");
const HecatombBase = require("../setMED/Hecatomb");

class Hecatomb extends HecatombBase {
  constructor (game) {
    super(game, "Hecatomb", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Hecatomb;
