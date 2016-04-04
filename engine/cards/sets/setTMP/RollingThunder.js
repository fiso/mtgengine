"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RollingThunderBase = require("../setBFZ/RollingThunder.js");

class RollingThunder extends RollingThunderBase {
  constructor(game) {
    super(game, "Rolling Thunder", "Tempest", "TMP");
  }
}

module.exports = RollingThunder;
