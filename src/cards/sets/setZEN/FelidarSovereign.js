"use strict";
const Constants = require ("../../../Constants");
const FelidarSovereignBase = require("../setBFZ/FelidarSovereign");

class FelidarSovereign extends FelidarSovereignBase {
  constructor (game) {
    super(game, "Felidar Sovereign", "Zendikar", "ZEN");
  }
}

module.exports = FelidarSovereign;
