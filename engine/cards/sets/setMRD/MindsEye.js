"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindsEyeBase = require("../setCM1/MindsEye.js");

class MindsEye extends MindsEyeBase {
  constructor(game) {
    super(game, "Mind's Eye", "Mirrodin", "MRD");
  }
}

module.exports = MindsEye;
