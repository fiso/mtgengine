"use strict";
const Constants = require ("../../../Constants");
const ThornscapeBattlemageBase = require("../setMM3/ThornscapeBattlemage");

class ThornscapeBattlemage extends ThornscapeBattlemageBase {
  constructor (game) {
    super(game, "Thornscape Battlemage", "World Championship Decks 2001", "WC01");
  }
}

module.exports = ThornscapeBattlemage;
