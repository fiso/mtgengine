"use strict";
const Constants = require ("../../../Constants");
const TheGitrogMonsterBase = require("../setSOI/TheGitrogMonster");

class TheGitrogMonster extends TheGitrogMonsterBase {
  constructor (game) {
    super(game, "The Gitrog Monster", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = TheGitrogMonster;
