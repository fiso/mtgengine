"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EpochrasiteBase = require("../setC14/Epochrasite.js");

class Epochrasite extends EpochrasiteBase {
  constructor(game) {
    super(game, "Epochrasite", "Modern Masters", "MMA");
  }
}

module.exports = Epochrasite;
