"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LabRatsBase = require("../setSTH/LabRats.js");

class LabRats extends LabRatsBase {
  constructor(game) {
    super(game, "Lab Rats", "Tempest Remastered", "TPR");
  }
}

module.exports = LabRats;
