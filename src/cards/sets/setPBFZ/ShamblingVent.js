"use strict";
const Constants = require ("../../../Constants");
const ShamblingVentBase = require("../setBFZ/ShamblingVent");

class ShamblingVent extends ShamblingVentBase {
  constructor (game) {
    super(game, "Shambling Vent", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = ShamblingVent;
