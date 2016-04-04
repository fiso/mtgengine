"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindWhip extends Card {
  constructor(game) {
    super(game, "Mind Whip", "Ice Age", "ICE");
  }
}

module.exports = MindWhip;
