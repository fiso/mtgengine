"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RofellosLlanowarEmissaryBase = require("../setUDS/RofellosLlanowarEmissary.js");

class RofellosLlanowarEmissary extends RofellosLlanowarEmissaryBase {
  constructor(game) {
    super(game, "Rofellos, Llanowar Emissary", "Vintage Masters", "VMA");
  }
}

module.exports = RofellosLlanowarEmissary;
