"use strict";
const Constants = require ("../../../Constants");
const YokeoftheDamnedBase = require("../setDDJ/YokeoftheDamned");

class YokeoftheDamned extends YokeoftheDamnedBase {
  constructor (game) {
    super(game, "Yoke of the Damned", "Conflux", "CON");
  }
}

module.exports = YokeoftheDamned;
