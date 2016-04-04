"use strict";
const Constants = require ("../../../Constants");
const DaggerbackBasiliskBase = require("../setDDP/DaggerbackBasilisk");

class DaggerbackBasilisk extends DaggerbackBasiliskBase {
  constructor(game) {
    super(game, "Daggerback Basilisk", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DaggerbackBasilisk;
