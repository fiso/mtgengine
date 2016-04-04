"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JestersMaskBase = require("../setICE/JestersMask.js");

class JestersMask extends JestersMaskBase {
  constructor(game) {
    super(game, "Jester's Mask", "Masters Edition II", "ME2");
  }
}

module.exports = JestersMask;
