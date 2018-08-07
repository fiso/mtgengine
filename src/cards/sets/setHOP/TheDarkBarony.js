"use strict";
const Constants = require ("../../../Constants");
const TheDarkBaronyBase = require("../setPCA/TheDarkBarony");

class TheDarkBarony extends TheDarkBaronyBase {
  constructor (game) {
    super(game, "The Dark Barony", "Planechase", "HOP");
  }
}

module.exports = TheDarkBarony;
