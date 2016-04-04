"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindWarp extends Card {
  constructor(game) {
    super(game, "Mind Warp", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MindWarp;
