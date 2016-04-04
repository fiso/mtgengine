"use strict";
const Constants = require ("../../../Constants");
const ElHajjâjBase = require("../setARN/ElHajjâj");

class ElHajjâj extends ElHajjâjBase {
  constructor(game) {
    super(game, "El-Hajjâj", "Fourth Edition", "4ED");
  }
}

module.exports = ElHajjâj;
