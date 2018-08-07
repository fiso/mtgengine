"use strict";
const Constants = require ("../../../Constants");
const PlagueMyrBase = require("../setTD2/PlagueMyr");

class PlagueMyr extends PlagueMyrBase {
  constructor (game) {
    super(game, "Plague Myr", "Wizards Play Network 2011", "PWP11");
  }
}

module.exports = PlagueMyr;
