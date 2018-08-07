"use strict";
const Constants = require ("../../../Constants");
const DreamProwlerBase = require("../setTPR/DreamProwler");

class DreamProwler extends DreamProwlerBase {
  constructor (game) {
    super(game, "Dream Prowler", "Ninth Edition", "9ED");
  }
}

module.exports = DreamProwler;
