"use strict";
const Constants = require ("../../../Constants");
const CrowdofCindersBase = require("../setDPA/CrowdofCinders");

class CrowdofCinders extends CrowdofCindersBase {
  constructor (game) {
    super(game, "Crowd of Cinders", "Shadowmoor", "SHM");
  }
}

module.exports = CrowdofCinders;
