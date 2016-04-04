"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TelethopterBase = require("../setTMP/Telethopter.js");

class Telethopter extends TelethopterBase {
  constructor(game) {
    super(game, "Telethopter", "Tempest Remastered", "TPR");
  }
}

module.exports = Telethopter;
