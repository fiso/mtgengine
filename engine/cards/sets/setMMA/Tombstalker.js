"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TombstalkerBase = require("../setFUT/Tombstalker.js");

class Tombstalker extends TombstalkerBase {
  constructor(game) {
    super(game, "Tombstalker", "Modern Masters", "MMA");
  }
}

module.exports = Tombstalker;
