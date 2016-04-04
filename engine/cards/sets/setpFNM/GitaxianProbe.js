"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GitaxianProbe extends Card {
  constructor(game) {
    super(game, "Gitaxian Probe", "Friday Night Magic", "pFNM");
  }
}

module.exports = GitaxianProbe;
