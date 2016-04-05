"use strict";
const Constants = require ("../../../Constants");
const RockyTarPitBase = require("../setDDP/RockyTarPit");

class RockyTarPit extends RockyTarPitBase {
  constructor(game) {
    super(game, "Rocky Tar Pit", "Mirage", "MIR");
  }
}

module.exports = RockyTarPit;
