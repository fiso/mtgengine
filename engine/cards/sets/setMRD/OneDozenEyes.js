"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OneDozenEyesBase = require("../setC13/OneDozenEyes.js");

class OneDozenEyes extends OneDozenEyesBase {
  constructor(game) {
    super(game, "One Dozen Eyes", "Mirrodin", "MRD");
  }
}

module.exports = OneDozenEyes;
