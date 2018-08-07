"use strict";
const Constants = require ("../../../Constants");
const BlackbladeReforgedBase = require("../setDOM/BlackbladeReforged");

class BlackbladeReforged extends BlackbladeReforgedBase {
  constructor (game) {
    super(game, "Blackblade Reforged", "Dominaria Promos", "PDOM");
  }
}

module.exports = BlackbladeReforged;
