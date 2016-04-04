"use strict";
const Constants = require ("../../../Constants");
const DauthiWarlordBase = require("../setEXO/DauthiWarlord");

class DauthiWarlord extends DauthiWarlordBase {
  constructor(game) {
    super(game, "Dauthi Warlord", "Tempest Remastered", "TPR");
  }
}

module.exports = DauthiWarlord;
