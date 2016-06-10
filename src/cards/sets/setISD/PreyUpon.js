"use strict";
const Constants = require ("../../../Constants");
const PreyUponBase = require("../setDDL/PreyUpon");

class PreyUpon extends PreyUponBase {
  constructor (game) {
    super(game, "Prey Upon", "Innistrad", "ISD");
  }
}

module.exports = PreyUpon;
