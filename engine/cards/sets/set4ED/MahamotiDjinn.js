"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MahamotiDjinnBase = require("../setBTD/MahamotiDjinn.js");

class MahamotiDjinn extends MahamotiDjinnBase {
  constructor(game) {
    super(game, "Mahamoti Djinn", "Fourth Edition", "4ED");
  }
}

module.exports = MahamotiDjinn;
