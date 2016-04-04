"use strict";
const Constants = require ("../../../Constants");
const ControlMagicBase = require("../setBRB/ControlMagic");

class ControlMagic extends ControlMagicBase {
  constructor(game) {
    super(game, "Control Magic", "Masters Edition IV", "ME4");
  }
}

module.exports = ControlMagic;
