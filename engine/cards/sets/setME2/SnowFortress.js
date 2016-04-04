"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SnowFortressBase = require("../setICE/SnowFortress.js");

class SnowFortress extends SnowFortressBase {
  constructor(game) {
    super(game, "Snow Fortress", "Masters Edition II", "ME2");
  }
}

module.exports = SnowFortress;
