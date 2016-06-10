"use strict";
const Constants = require ("../../../Constants");
const ControlMagicBase = require("../setBRB/ControlMagic");

class ControlMagic extends ControlMagicBase {
  constructor (game) {
    super(game, "Control Magic", "Limited Edition Beta", "LEB");
  }
}

module.exports = ControlMagic;
