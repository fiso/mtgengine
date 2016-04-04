"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReanimateBase = require("../setARC/Reanimate.js");

class Reanimate extends ReanimateBase {
  constructor(game) {
    super(game, "Reanimate", "Tempest", "TMP");
  }
}

module.exports = Reanimate;
