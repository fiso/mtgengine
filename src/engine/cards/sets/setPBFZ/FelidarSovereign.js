"use strict";
const Constants = require ("../../../Constants");
const FelidarSovereignBase = require("../setBFZ/FelidarSovereign");

class FelidarSovereign extends FelidarSovereignBase {
  constructor (game) {
    super(game, "Felidar Sovereign", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = FelidarSovereign;
