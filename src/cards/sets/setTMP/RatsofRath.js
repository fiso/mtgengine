"use strict";
const Constants = require ("../../../Constants");
const RatsofRathBase = require("../setTPR/RatsofRath");

class RatsofRath extends RatsofRathBase {
  constructor (game) {
    super(game, "Rats of Rath", "Tempest", "TMP");
  }
}

module.exports = RatsofRath;
