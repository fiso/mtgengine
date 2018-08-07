"use strict";
const Constants = require ("../../../Constants");
const CloudthresherBase = require("../setCMA/Cloudthresher");

class Cloudthresher extends CloudthresherBase {
  constructor (game) {
    super(game, "Cloudthresher", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = Cloudthresher;
