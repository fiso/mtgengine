"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindTwist extends Card {
  constructor(game) {
    super(game, "Mind Twist", "Collector's Edition", "CED");
  }
}

module.exports = MindTwist;
