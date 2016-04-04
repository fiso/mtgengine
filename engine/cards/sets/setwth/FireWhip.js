"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireWhipBase = require("../setTSB/FireWhip.js");

class FireWhip extends FireWhipBase {
  constructor(game) {
    super(game, "Fire Whip", "Weatherlight", "WTH");
  }
}

module.exports = FireWhip;
