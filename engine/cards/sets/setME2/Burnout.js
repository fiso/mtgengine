"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BurnoutBase = require("../setALL/Burnout.js");

class Burnout extends BurnoutBase {
  constructor(game) {
    super(game, "Burnout", "Masters Edition II", "ME2");
  }
}

module.exports = Burnout;
