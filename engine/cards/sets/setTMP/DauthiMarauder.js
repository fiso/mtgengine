"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DauthiMarauder extends Card {
  constructor(game) {
    super(game, "Dauthi Marauder", "Tempest", "TMP");
  }
}

module.exports = DauthiMarauder;
