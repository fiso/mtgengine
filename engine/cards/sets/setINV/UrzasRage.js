"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrzasRageBase = require("../setC15/UrzasRage.js");

class UrzasRage extends UrzasRageBase {
  constructor(game) {
    super(game, "Urza's Rage", "Invasion", "INV");
  }
}

module.exports = UrzasRage;
