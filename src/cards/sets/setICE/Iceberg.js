"use strict";
const Constants = require ("../../../Constants");
const IcebergBase = require("../setME2/Iceberg");

class Iceberg extends IcebergBase {
  constructor (game) {
    super(game, "Iceberg", "Ice Age", "ICE");
  }
}

module.exports = Iceberg;
