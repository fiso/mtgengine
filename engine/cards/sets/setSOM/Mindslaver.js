"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindslaverBase = require("../setMRD/Mindslaver.js");

class Mindslaver extends MindslaverBase {
  constructor(game) {
    super(game, "Mindslaver", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Mindslaver;
