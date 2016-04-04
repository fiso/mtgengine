"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoatofArmsBase = require("../setDPA/CoatofArms.js");

class CoatofArms extends CoatofArmsBase {
  constructor(game) {
    super(game, "Coat of Arms", "Exodus", "EXO");
  }
}

module.exports = CoatofArms;
