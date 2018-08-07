"use strict";
const Constants = require ("../../../Constants");
const CleansingNovaBase = require("../setM19/CleansingNova");

class CleansingNova extends CleansingNovaBase {
  constructor (game) {
    super(game, "Cleansing Nova", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = CleansingNova;
