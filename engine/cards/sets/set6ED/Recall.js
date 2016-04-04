"use strict";
const Constants = require ("../../../Constants");
const RecallBase = require("../setCHR/Recall");

class Recall extends RecallBase {
  constructor(game) {
    super(game, "Recall", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Recall;
