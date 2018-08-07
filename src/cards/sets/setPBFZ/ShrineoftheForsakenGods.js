"use strict";
const Constants = require ("../../../Constants");
const ShrineoftheForsakenGodsBase = require("../setBFZ/ShrineoftheForsakenGods");

class ShrineoftheForsakenGods extends ShrineoftheForsakenGodsBase {
  constructor (game) {
    super(game, "Shrine of the Forsaken Gods", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = ShrineoftheForsakenGods;
