"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheGitrogMonster extends Card {
  constructor(game) {
    super(game, "The Gitrog Monster", "Shadows over Innistrad", "SOI");
  }
}

module.exports = TheGitrogMonster;
