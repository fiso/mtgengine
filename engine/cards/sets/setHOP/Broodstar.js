"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BroodstarBase = require("../setMRD/Broodstar.js");

class Broodstar extends BroodstarBase {
  constructor(game) {
    super(game, "Broodstar", "Planechase", "HOP");
  }
}

module.exports = Broodstar;
