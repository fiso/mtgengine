"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecallBase = require("../setCHR/Recall.js");

class Recall extends RecallBase {
  constructor(game) {
    super(game, "Recall", "Legends", "LEG");
  }
}

module.exports = Recall;
