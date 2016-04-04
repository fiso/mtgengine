"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MurderousRedcapBase = require("../setpFNM/MurderousRedcap.js");

class MurderousRedcap extends MurderousRedcapBase {
  constructor(game) {
    super(game, "Murderous Redcap", "Shadowmoor", "SHM");
  }
}

module.exports = MurderousRedcap;
