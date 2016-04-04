"use strict";
const Constants = require ("../../../Constants");
const RecallBase = require("../setCHR/Recall");

class Recall extends RecallBase {
  constructor(game) {
    super(game, "Recall", "Fifth Edition", "5ED");
  }
}

module.exports = Recall;
