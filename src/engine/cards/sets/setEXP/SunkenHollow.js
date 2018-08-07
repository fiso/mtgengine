"use strict";
const Constants = require ("../../../Constants");
const SunkenHollowBase = require("../setBFZ/SunkenHollow");

class SunkenHollow extends SunkenHollowBase {
  constructor (game) {
    super(game, "Sunken Hollow", "Zendikar Expeditions", "EXP");
  }
}

module.exports = SunkenHollow;
