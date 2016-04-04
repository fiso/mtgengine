"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntingCheetah extends Card {
  constructor(game) {
    super(game, "Hunting Cheetah", "Masters Edition III", "ME3");
  }
}

module.exports = HuntingCheetah;
