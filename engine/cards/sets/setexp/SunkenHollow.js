"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunkenHollowBase = require("../setBFZ/SunkenHollow.js");

class SunkenHollow extends SunkenHollowBase {
  constructor(game) {
    super(game, "Sunken Hollow", "Zendikar Expedition", "EXP");
  }
}

module.exports = SunkenHollow;
