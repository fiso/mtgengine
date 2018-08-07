"use strict";
const Constants = require ("../../../Constants");
const ControlMagicBase = require("../setCMA/ControlMagic");

class ControlMagic extends ControlMagicBase {
  constructor (game) {
    super(game, "Control Magic", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ControlMagic;
