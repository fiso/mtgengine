"use strict";
const Constants = require ("../../../Constants");
const ControlMagicBase = require("../setCMA/ControlMagic");

class ControlMagic extends ControlMagicBase {
  constructor (game) {
    super(game, "Control Magic", "Fourth Edition", "4ED");
  }
}

module.exports = ControlMagic;
