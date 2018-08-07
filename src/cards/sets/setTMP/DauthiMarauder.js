"use strict";
const Constants = require ("../../../Constants");
const DauthiMarauderBase = require("../setTPR/DauthiMarauder");

class DauthiMarauder extends DauthiMarauderBase {
  constructor (game) {
    super(game, "Dauthi Marauder", "Tempest", "TMP");
  }
}

module.exports = DauthiMarauder;
