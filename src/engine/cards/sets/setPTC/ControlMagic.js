"use strict";
const Constants = require ("../../../Constants");
const ControlMagicBase = require("../setCMA/ControlMagic");

class ControlMagic extends ControlMagicBase {
  constructor (game) {
    super(game, "Control Magic", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = ControlMagic;
