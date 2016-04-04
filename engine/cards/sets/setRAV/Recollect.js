"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecollectBase = require("../setpMPR/Recollect.js");

class Recollect extends RecollectBase {
  constructor(game) {
    super(game, "Recollect", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Recollect;
