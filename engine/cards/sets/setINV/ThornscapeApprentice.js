"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThornscapeApprenticeBase = require("../setDDE/ThornscapeApprentice.js");

class ThornscapeApprentice extends ThornscapeApprenticeBase {
  constructor(game) {
    super(game, "Thornscape Apprentice", "Invasion", "INV");
  }
}

module.exports = ThornscapeApprentice;
