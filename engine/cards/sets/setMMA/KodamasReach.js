"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KodamasReachBase = require("../setCHK/KodamasReach.js");

class KodamasReach extends KodamasReachBase {
  constructor(game) {
    super(game, "Kodama's Reach", "Modern Masters", "MMA");
  }
}

module.exports = KodamasReach;
