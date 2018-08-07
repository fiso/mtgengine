"use strict";
const Constants = require ("../../../Constants");
const HellfireBase = require("../setME3/Hellfire");

class Hellfire extends HellfireBase {
  constructor (game) {
    super(game, "Hellfire", "Legends", "LEG");
  }
}

module.exports = Hellfire;
