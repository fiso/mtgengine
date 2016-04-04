"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThicketBasiliskBase = require("../set6ED/ThicketBasilisk.js");

class ThicketBasilisk extends ThicketBasiliskBase {
  constructor(game) {
    super(game, "Thicket Basilisk", "Revised Edition", "3ED");
  }
}

module.exports = ThicketBasilisk;
