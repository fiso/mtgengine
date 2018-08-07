"use strict";
const Constants = require ("../../../Constants");
const FireIceBase = require("../setDDJ/FireIce");

class FireIce extends FireIceBase {
  constructor (game) {
    super(game, "Fire // Ice", "Commander 2011", "CMD");
  }
}

module.exports = FireIce;
