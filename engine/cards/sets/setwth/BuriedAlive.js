"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BuriedAliveBase = require("../setCMD/BuriedAlive.js");

class BuriedAlive extends BuriedAliveBase {
  constructor(game) {
    super(game, "Buried Alive", "Weatherlight", "WTH");
  }
}

module.exports = BuriedAlive;
