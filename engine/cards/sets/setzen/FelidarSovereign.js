"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FelidarSovereignBase = require("../setBFZ/FelidarSovereign.js");

class FelidarSovereign extends FelidarSovereignBase {
  constructor(game) {
    super(game, "Felidar Sovereign", "Zendikar", "ZEN");
  }
}

module.exports = FelidarSovereign;
