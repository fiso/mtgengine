"use strict";
const Constants = require ("../../../Constants");
const JaddiOffshootBase = require("../setIMA/JaddiOffshoot");

class JaddiOffshoot extends JaddiOffshootBase {
  constructor (game) {
    super(game, "Jaddi Offshoot", "Battle for Zendikar", "BFZ");
  }
}

module.exports = JaddiOffshoot;
