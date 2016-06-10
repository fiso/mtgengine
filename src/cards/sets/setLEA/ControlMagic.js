"use strict";
const Constants = require ("../../../Constants");
const ControlMagicBase = require("../setBRB/ControlMagic");

class ControlMagic extends ControlMagicBase {
  constructor (game) {
    super(game, "Control Magic", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ControlMagic;
