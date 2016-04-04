"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MahamotiDjinnBase = require("../setBTD/MahamotiDjinn.js");

class MahamotiDjinn extends MahamotiDjinnBase {
  constructor(game) {
    super(game, "Mahamoti Djinn", "Collector's Edition", "CED");
  }
}

module.exports = MahamotiDjinn;
