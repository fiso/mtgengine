"use strict";
const Constants = require ("../../../Constants");
const BloodfireKavuBase = require("../setDDI/BloodfireKavu");

class BloodfireKavu extends BloodfireKavuBase {
  constructor (game) {
    super(game, "Bloodfire Kavu", "Apocalypse", "APC");
  }
}

module.exports = BloodfireKavu;
