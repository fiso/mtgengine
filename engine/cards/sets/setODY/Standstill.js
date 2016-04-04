"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StandstillBase = require("../setpMEI/Standstill.js");

class Standstill extends StandstillBase {
  constructor(game) {
    super(game, "Standstill", "Odyssey", "ODY");
  }
}

module.exports = Standstill;
