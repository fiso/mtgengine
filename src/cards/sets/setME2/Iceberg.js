"use strict";
const Constants = require ("../../../Constants");
const IcebergBase = require("../setCST/Iceberg");

class Iceberg extends IcebergBase {
  constructor (game) {
    super(game, "Iceberg", "Masters Edition II", "ME2");
  }
}

module.exports = Iceberg;
