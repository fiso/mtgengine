"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElHajjâjBase = require("../setARN/ElHajjâj.js");

class ElHajjâj extends ElHajjâjBase {
  constructor(game) {
    super(game, "El-Hajjâj", "Revised Edition", "3ED");
  }
}

module.exports = ElHajjâj;
