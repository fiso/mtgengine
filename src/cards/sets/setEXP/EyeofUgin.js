"use strict";
const Constants = require ("../../../Constants");
const EyeofUginBase = require("../setMM2/EyeofUgin");

class EyeofUgin extends EyeofUginBase {
  constructor (game) {
    super(game, "Eye of Ugin", "Zendikar Expedition", "EXP");
  }
}

module.exports = EyeofUgin;
