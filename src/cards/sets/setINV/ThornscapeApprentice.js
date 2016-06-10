"use strict";
const Constants = require ("../../../Constants");
const ThornscapeApprenticeBase = require("../setDDE/ThornscapeApprentice");

class ThornscapeApprentice extends ThornscapeApprenticeBase {
  constructor (game) {
    super(game, "Thornscape Apprentice", "Invasion", "INV");
  }
}

module.exports = ThornscapeApprentice;
