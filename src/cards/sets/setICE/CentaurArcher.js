"use strict";
const Constants = require ("../../../Constants");
const CentaurArcherBase = require("../setMED/CentaurArcher");

class CentaurArcher extends CentaurArcherBase {
  constructor (game) {
    super(game, "Centaur Archer", "Ice Age", "ICE");
  }
}

module.exports = CentaurArcher;
