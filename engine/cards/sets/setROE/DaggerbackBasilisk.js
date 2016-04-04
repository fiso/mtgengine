"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DaggerbackBasiliskBase = require("../setDDP/DaggerbackBasilisk.js");

class DaggerbackBasilisk extends DaggerbackBasiliskBase {
  constructor(game) {
    super(game, "Daggerback Basilisk", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DaggerbackBasilisk;
