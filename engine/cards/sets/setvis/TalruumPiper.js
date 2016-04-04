"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalruumPiper extends Card {
  constructor(game) {
    super(game, "Talruum Piper", "Visions", "VIS");
  }
}

module.exports = TalruumPiper;
