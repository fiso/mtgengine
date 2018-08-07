"use strict";
const Constants = require ("../../../Constants");
const WindriderEelBase = require("../setE01/WindriderEel");

class WindriderEel extends WindriderEelBase {
  constructor (game) {
    super(game, "Windrider Eel", "Zendikar", "ZEN");
  }
}

module.exports = WindriderEel;
