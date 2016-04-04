"use strict";
const Constants = require ("../../../Constants");
const ControlMagicBase = require("../setBRB/ControlMagic");

class ControlMagic extends ControlMagicBase {
  constructor(game) {
    super(game, "Control Magic", "Collector's Edition", "CED");
  }
}

module.exports = ControlMagic;
