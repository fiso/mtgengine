"use strict";
const Constants = require ("../../../Constants");
const MagnivoreBase = require("../set9ED/Magnivore");

class Magnivore extends MagnivoreBase {
  constructor(game) {
    super(game, "Magnivore", "Odyssey", "ODY");
  }
}

module.exports = Magnivore;
