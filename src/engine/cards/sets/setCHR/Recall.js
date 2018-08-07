"use strict";
const Constants = require ("../../../Constants");
const RecallBase = require("../setME3/Recall");

class Recall extends RecallBase {
  constructor (game) {
    super(game, "Recall", "Chronicles", "CHR");
  }
}

module.exports = Recall;
