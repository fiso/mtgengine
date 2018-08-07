"use strict";
const Constants = require ("../../../Constants");
const VowofMaliceBase = require("../setCM2/VowofMalice");

class VowofMalice extends VowofMaliceBase {
  constructor (game) {
    super(game, "Vow of Malice", "Legendary Cube", "PZ1");
  }
}

module.exports = VowofMalice;
