"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IcebergBase = require("../setCST/Iceberg.js");

class Iceberg extends IcebergBase {
  constructor(game) {
    super(game, "Iceberg", "Ice Age", "ICE");
  }
}

module.exports = Iceberg;
