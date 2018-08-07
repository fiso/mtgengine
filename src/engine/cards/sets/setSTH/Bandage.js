"use strict";
const Constants = require ("../../../Constants");
const BandageBase = require("../setTPR/Bandage");

class Bandage extends BandageBase {
  constructor (game) {
    super(game, "Bandage", "Stronghold", "STH");
  }
}

module.exports = Bandage;
