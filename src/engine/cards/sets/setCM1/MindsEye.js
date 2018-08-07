"use strict";
const Constants = require ("../../../Constants");
const MindsEyeBase = require("../setBBD/MindsEye");

class MindsEye extends MindsEyeBase {
  constructor (game) {
    super(game, "Mind's Eye", "Commander's Arsenal", "CM1");
  }
}

module.exports = MindsEye;
