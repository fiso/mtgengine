"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArchfiendofDepravityBase = require("../setFRF/ArchfiendofDepravity.js");

class ArchfiendofDepravity extends ArchfiendofDepravityBase {
  constructor(game) {
    super(game, "Archfiend of Depravity", "Media Inserts", "pMEI");
  }
}

module.exports = ArchfiendofDepravity;
