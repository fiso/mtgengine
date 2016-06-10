"use strict";
const Constants = require ("../../../Constants");
const WastelandBase = require("../setpJGP/Wasteland");

class Wasteland extends WastelandBase {
  constructor (game) {
    super(game, "Wasteland", "Tempest Remastered", "TPR");
  }
}

module.exports = Wasteland;
