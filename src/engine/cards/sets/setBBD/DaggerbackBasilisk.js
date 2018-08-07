"use strict";
const Constants = require ("../../../Constants");
const DaggerbackBasiliskBase = require("../setM19/DaggerbackBasilisk");

class DaggerbackBasilisk extends DaggerbackBasiliskBase {
  constructor (game) {
    super(game, "Daggerback Basilisk", "Battlebond", "BBD");
  }
}

module.exports = DaggerbackBasilisk;
