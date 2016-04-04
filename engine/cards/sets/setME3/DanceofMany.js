"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DanceofManyBase = require("../setCHR/DanceofMany.js");

class DanceofMany extends DanceofManyBase {
  constructor(game) {
    super(game, "Dance of Many", "Masters Edition III", "ME3");
  }
}

module.exports = DanceofMany;
