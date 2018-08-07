"use strict";
const Constants = require ("../../../Constants");
const SongsoftheDamnedBase = require("../setME2/SongsoftheDamned");

class SongsoftheDamned extends SongsoftheDamnedBase {
  constructor (game) {
    super(game, "Songs of the Damned", "Ice Age", "ICE");
  }
}

module.exports = SongsoftheDamned;
