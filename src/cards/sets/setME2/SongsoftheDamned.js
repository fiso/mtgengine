"use strict";
const Constants = require ("../../../Constants");
const SongsoftheDamnedBase = require("../setICE/SongsoftheDamned");

class SongsoftheDamned extends SongsoftheDamnedBase {
  constructor (game) {
    super(game, "Songs of the Damned", "Masters Edition II", "ME2");
  }
}

module.exports = SongsoftheDamned;
