"use strict";
const Constants = require ("../../../Constants");
const BoggartRamGangBase = require("../setpGTW/BoggartRamGang");

class BoggartRamGang extends BoggartRamGangBase {
  constructor(game) {
    super(game, "Boggart Ram-Gang", "Shadowmoor", "SHM");
  }
}

module.exports = BoggartRamGang;
