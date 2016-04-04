"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrowdofCindersBase = require("../setDPA/CrowdofCinders.js");

class CrowdofCinders extends CrowdofCindersBase {
  constructor(game) {
    super(game, "Crowd of Cinders", "Shadowmoor", "SHM");
  }
}

module.exports = CrowdofCinders;
