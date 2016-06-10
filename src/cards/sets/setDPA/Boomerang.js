"use strict";
const Constants = require ("../../../Constants");
const BoomerangBase = require("../setCHR/Boomerang");

class Boomerang extends BoomerangBase {
  constructor (game) {
    super(game, "Boomerang", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Boomerang;
