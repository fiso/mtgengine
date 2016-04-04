"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NorwoodArchersBase = require("../setPO2/NorwoodArchers.js");

class NorwoodArchers extends NorwoodArchersBase {
  constructor(game) {
    super(game, "Norwood Archers", "Starter 1999", "S99");
  }
}

module.exports = NorwoodArchers;
