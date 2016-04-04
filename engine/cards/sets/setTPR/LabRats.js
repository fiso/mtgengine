"use strict";
const Constants = require ("../../../Constants");
const LabRatsBase = require("../setSTH/LabRats");

class LabRats extends LabRatsBase {
  constructor(game) {
    super(game, "Lab Rats", "Tempest Remastered", "TPR");
  }
}

module.exports = LabRats;
