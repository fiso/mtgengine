"use strict";
const Constants = require ("../../../Constants");
const DreamProwlerBase = require("../set9ED/DreamProwler");

class DreamProwler extends DreamProwlerBase {
  constructor (game) {
    super(game, "Dream Prowler", "Stronghold", "STH");
  }
}

module.exports = DreamProwler;
