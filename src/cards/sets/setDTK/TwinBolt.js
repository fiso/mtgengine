"use strict";
const Constants = require ("../../../Constants");
const TwinBoltBase = require("../setCN2/TwinBolt");

class TwinBolt extends TwinBoltBase {
  constructor (game) {
    super(game, "Twin Bolt", "Dragons of Tarkir", "DTK");
  }
}

module.exports = TwinBolt;
