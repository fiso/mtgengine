"use strict";
const Constants = require ("../../../Constants");
const ControlMagicBase = require("../setBRB/ControlMagic");

class ControlMagic extends ControlMagicBase {
  constructor(game) {
    super(game, "Control Magic", "Commander 2013 Edition", "C13");
  }
}

module.exports = ControlMagic;
