"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DauthiSlayerBase = require("../setpARL/DauthiSlayer.js");

class DauthiSlayer extends DauthiSlayerBase {
  constructor(game) {
    super(game, "Dauthi Slayer", "Tempest Remastered", "TPR");
  }
}

module.exports = DauthiSlayer;
