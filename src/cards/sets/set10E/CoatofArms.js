"use strict";
const Constants = require ("../../../Constants");
const CoatofArmsBase = require("../setDPA/CoatofArms");

class CoatofArms extends CoatofArmsBase {
  constructor (game) {
    super(game, "Coat of Arms", "Tenth Edition", "10E");
  }
}

module.exports = CoatofArms;
