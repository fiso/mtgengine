"use strict";
const Constants = require ("../../../Constants");
const RatsofRathBase = require("../setTMP/RatsofRath");

class RatsofRath extends RatsofRathBase {
  constructor (game) {
    super(game, "Rats of Rath", "Tempest Remastered", "TPR");
  }
}

module.exports = RatsofRath;
