"use strict";
const Constants = require ("../../../Constants");
const DauthiWarlordBase = require("../setTPR/DauthiWarlord");

class DauthiWarlord extends DauthiWarlordBase {
  constructor (game) {
    super(game, "Dauthi Warlord", "Exodus", "EXO");
  }
}

module.exports = DauthiWarlord;
