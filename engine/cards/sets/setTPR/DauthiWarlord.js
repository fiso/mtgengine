"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DauthiWarlordBase = require("../setEXO/DauthiWarlord.js");

class DauthiWarlord extends DauthiWarlordBase {
  constructor(game) {
    super(game, "Dauthi Warlord", "Tempest Remastered", "TPR");
  }
}

module.exports = DauthiWarlord;
