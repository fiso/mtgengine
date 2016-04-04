"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VowofMaliceBase = require("../setC15/VowofMalice.js");

class VowofMalice extends VowofMaliceBase {
  constructor(game) {
    super(game, "Vow of Malice", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VowofMalice;
