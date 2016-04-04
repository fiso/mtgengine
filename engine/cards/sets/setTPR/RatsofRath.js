"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RatsofRathBase = require("../setTMP/RatsofRath.js");

class RatsofRath extends RatsofRathBase {
  constructor(game) {
    super(game, "Rats of Rath", "Tempest Remastered", "TPR");
  }
}

module.exports = RatsofRath;
