"use strict";
const Constants = require ("../../../Constants");
const BarrageTyrantBase = require("../setBFZ/BarrageTyrant");

class BarrageTyrant extends BarrageTyrantBase {
  constructor (game) {
    super(game, "Barrage Tyrant", "Magic Online Promos", "PRM");
  }
}

module.exports = BarrageTyrant;
