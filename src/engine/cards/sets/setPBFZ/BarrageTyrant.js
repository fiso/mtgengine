"use strict";
const Constants = require ("../../../Constants");
const BarrageTyrantBase = require("../setBFZ/BarrageTyrant");

class BarrageTyrant extends BarrageTyrantBase {
  constructor (game) {
    super(game, "Barrage Tyrant", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = BarrageTyrant;
