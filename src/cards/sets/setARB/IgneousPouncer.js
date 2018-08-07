"use strict";
const Constants = require ("../../../Constants");
const IgneousPouncerBase = require("../setDDH/IgneousPouncer");

class IgneousPouncer extends IgneousPouncerBase {
  constructor (game) {
    super(game, "Igneous Pouncer", "Alara Reborn", "ARB");
  }
}

module.exports = IgneousPouncer;
