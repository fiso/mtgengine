"use strict";
const Constants = require ("../../../Constants");
const UnknownShoresBase = require("../setXLN/UnknownShores");

class UnknownShores extends UnknownShoresBase {
  constructor (game) {
    super(game, "Unknown Shores", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = UnknownShores;
