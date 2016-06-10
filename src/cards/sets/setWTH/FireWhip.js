"use strict";
const Constants = require ("../../../Constants");
const FireWhipBase = require("../setTSB/FireWhip");

class FireWhip extends FireWhipBase {
  constructor (game) {
    super(game, "Fire Whip", "Weatherlight", "WTH");
  }
}

module.exports = FireWhip;
