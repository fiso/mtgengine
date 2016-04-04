"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BellowingFiendBase = require("../set7ED/BellowingFiend.js");

class BellowingFiend extends BellowingFiendBase {
  constructor(game) {
    super(game, "Bellowing Fiend", "Tempest", "TMP");
  }
}

module.exports = BellowingFiend;
