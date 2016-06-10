"use strict";
const Constants = require ("../../../Constants");
const HellfireBase = require("../setLEG/Hellfire");

class Hellfire extends HellfireBase {
  constructor (game) {
    super(game, "Hellfire", "Masters Edition III", "ME3");
  }
}

module.exports = Hellfire;
