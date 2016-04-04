"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RockyTarPitBase = require("../setDDP/RockyTarPit.js");

class RockyTarPit extends RockyTarPitBase {
  constructor(game) {
    super(game, "Rocky Tar Pit", "Vintage Masters", "VMA");
  }
}

module.exports = RockyTarPit;
