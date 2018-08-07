"use strict";
const Constants = require ("../../../Constants");
const InventorsGogglesBase = require("../setDDU/InventorsGoggles");

class InventorsGoggles extends InventorsGogglesBase {
  constructor (game) {
    super(game, "Inventor's Goggles", "Kaladesh", "KLD");
  }
}

module.exports = InventorsGoggles;
