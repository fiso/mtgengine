"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindSlash extends Card {
  constructor(game) {
    super(game, "Mind Slash", "Eighth Edition", "8ED");
  }
}

module.exports = MindSlash;
