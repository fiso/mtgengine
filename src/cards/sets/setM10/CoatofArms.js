"use strict";
const Constants = require ("../../../Constants");
const CoatofArmsBase = require("../setDPA/CoatofArms");

class CoatofArms extends CoatofArmsBase {
  constructor (game) {
    super(game, "Coat of Arms", "Magic 2010", "M10");
  }
}

module.exports = CoatofArms;
