"use strict";
const Constants = require ("../../../Constants");
const AlwaysWatchingBase = require("../setSOI/AlwaysWatching");

class AlwaysWatching extends AlwaysWatchingBase {
  constructor (game) {
    super(game, "Always Watching", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = AlwaysWatching;
