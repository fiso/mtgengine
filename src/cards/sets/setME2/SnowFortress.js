"use strict";
const Constants = require ("../../../Constants");
const SnowFortressBase = require("../setICE/SnowFortress");

class SnowFortress extends SnowFortressBase {
  constructor (game) {
    super(game, "Snow Fortress", "Masters Edition II", "ME2");
  }
}

module.exports = SnowFortress;
