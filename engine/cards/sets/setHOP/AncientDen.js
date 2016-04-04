"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AncientDenBase = require("../setMRD/AncientDen.js");

class AncientDen extends AncientDenBase {
  constructor(game) {
    super(game, "Ancient Den", "Planechase", "HOP");
  }
}

module.exports = AncientDen;
