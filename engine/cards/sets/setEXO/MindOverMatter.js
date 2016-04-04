"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindOverMatter extends Card {
  constructor(game) {
    super(game, "Mind Over Matter", "Exodus", "EXO");
  }
}

module.exports = MindOverMatter;
