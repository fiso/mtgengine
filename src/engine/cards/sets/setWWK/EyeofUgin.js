"use strict";
const Constants = require ("../../../Constants");
const EyeofUginBase = require("../setEXP/EyeofUgin");

class EyeofUgin extends EyeofUginBase {
  constructor (game) {
    super(game, "Eye of Ugin", "Worldwake", "WWK");
  }
}

module.exports = EyeofUgin;
