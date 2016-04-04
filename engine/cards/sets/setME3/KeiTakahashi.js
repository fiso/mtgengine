"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KeiTakahashiBase = require("../setCHR/KeiTakahashi.js");

class KeiTakahashi extends KeiTakahashiBase {
  constructor(game) {
    super(game, "Kei Takahashi", "Masters Edition III", "ME3");
  }
}

module.exports = KeiTakahashi;
