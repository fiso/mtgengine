"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EyeofUginBase = require("../setMM2/EyeofUgin.js");

class EyeofUgin extends EyeofUginBase {
  constructor(game) {
    super(game, "Eye of Ugin", "Worldwake", "WWK");
  }
}

module.exports = EyeofUgin;
