"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MahamotiDjinnBase = require("../setBTD/MahamotiDjinn.js");

class MahamotiDjinn extends MahamotiDjinnBase {
  constructor(game) {
    super(game, "Mahamoti Djinn", "Magic 2015 Core Set", "M15");
  }
}

module.exports = MahamotiDjinn;
