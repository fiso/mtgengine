"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheGitrogMonster extends UnimplementedCard {
  constructor (game) {
    super(game, "The Gitrog Monster", "Shadows over Innistrad", "SOI");
  }
}

module.exports = TheGitrogMonster;
