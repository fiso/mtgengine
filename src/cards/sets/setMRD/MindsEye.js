"use strict";
const Constants = require ("../../../Constants");
const MindsEyeBase = require("../setBBD/MindsEye");

class MindsEye extends MindsEyeBase {
  constructor (game) {
    super(game, "Mind's Eye", "Mirrodin", "MRD");
  }
}

module.exports = MindsEye;
