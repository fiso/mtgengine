"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DauthiMarauderBase = require("../setTMP/DauthiMarauder.js");

class DauthiMarauder extends DauthiMarauderBase {
  constructor(game) {
    super(game, "Dauthi Marauder", "Tempest Remastered", "TPR");
  }
}

module.exports = DauthiMarauder;
