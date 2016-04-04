"use strict";
const Constants = require ("../../../Constants");
const DauthiMarauderBase = require("../setTMP/DauthiMarauder");

class DauthiMarauder extends DauthiMarauderBase {
  constructor(game) {
    super(game, "Dauthi Marauder", "Tempest Remastered", "TPR");
  }
}

module.exports = DauthiMarauder;
