"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ControlMagicBase = require("../setBRB/ControlMagic.js");

class ControlMagic extends ControlMagicBase {
  constructor(game) {
    super(game, "Control Magic", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ControlMagic;
