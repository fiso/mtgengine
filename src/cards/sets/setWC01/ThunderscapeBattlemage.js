"use strict";
const Constants = require ("../../../Constants");
const ThunderscapeBattlemageBase = require("../setDDE/ThunderscapeBattlemage");

class ThunderscapeBattlemage extends ThunderscapeBattlemageBase {
  constructor (game) {
    super(game, "Thunderscape Battlemage", "World Championship Decks 2001", "WC01");
  }
}

module.exports = ThunderscapeBattlemage;
