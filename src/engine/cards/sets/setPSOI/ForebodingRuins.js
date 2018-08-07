"use strict";
const Constants = require ("../../../Constants");
const ForebodingRuinsBase = require("../setSOI/ForebodingRuins");

class ForebodingRuins extends ForebodingRuinsBase {
  constructor (game) {
    super(game, "Foreboding Ruins", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = ForebodingRuins;
