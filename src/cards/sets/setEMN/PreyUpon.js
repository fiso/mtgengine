"use strict";
const Constants = require ("../../../Constants");
const PreyUponBase = require("../setE02/PreyUpon");

class PreyUpon extends PreyUponBase {
  constructor (game) {
    super(game, "Prey Upon", "Eldritch Moon", "EMN");
  }
}

module.exports = PreyUpon;
