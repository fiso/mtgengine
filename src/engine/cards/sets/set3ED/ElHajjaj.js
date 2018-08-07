"use strict";
const Constants = require ("../../../Constants");
const ElHajjajBase = require("../set4ED/ElHajjaj");

class ElHajjaj extends ElHajjajBase {
  constructor (game) {
    super(game, "El-Hajjâj", "Revised Edition", "3ED");
  }
}

module.exports = ElHajjaj;
