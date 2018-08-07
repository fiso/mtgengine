"use strict";
const Constants = require ("../../../Constants");
const SnowFortressBase = require("../setME2/SnowFortress");

class SnowFortress extends SnowFortressBase {
  constructor (game) {
    super(game, "Snow Fortress", "Ice Age", "ICE");
  }
}

module.exports = SnowFortress;
