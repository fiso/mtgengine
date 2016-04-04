"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TwilightMireBase = require("../setEVE/TwilightMire.js");

class TwilightMire extends TwilightMireBase {
  constructor(game) {
    super(game, "Twilight Mire", "Zendikar Expedition", "EXP");
  }
}

module.exports = TwilightMire;
