"use strict";
const Constants = require ("../../../Constants");
const ElHajjajBase = require("../setARN/ElHajjaj");

class ElHajjaj extends ElHajjajBase {
  constructor (game) {
    super(game, "El-Hajjâj", "Fourth Edition", "4ED");
  }
}

module.exports = ElHajjaj;
