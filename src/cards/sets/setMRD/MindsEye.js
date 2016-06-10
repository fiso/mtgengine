"use strict";
const Constants = require ("../../../Constants");
const MindsEyeBase = require("../setCM1/MindsEye");

class MindsEye extends MindsEyeBase {
  constructor (game) {
    super(game, "Mind's Eye", "Mirrodin", "MRD");
  }
}

module.exports = MindsEye;
