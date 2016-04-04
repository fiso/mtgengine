"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PreyUponBase = require("../setDDL/PreyUpon.js");

class PreyUpon extends PreyUponBase {
  constructor(game) {
    super(game, "Prey Upon", "Magic 2013", "M13");
  }
}

module.exports = PreyUpon;
