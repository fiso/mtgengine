"use strict";
const Constants = require ("../../../Constants");
const IcebergBase = require("../setME2/Iceberg");

class Iceberg extends IcebergBase {
  constructor (game) {
    super(game, "Iceberg", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Iceberg;
