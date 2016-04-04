"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FirespoutBase = require("../setV14/Firespout.js");

class Firespout extends FirespoutBase {
  constructor(game) {
    super(game, "Firespout", "Shadowmoor", "SHM");
  }
}

module.exports = Firespout;
