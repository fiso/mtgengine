"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HellsThunderBase = require("../setDDN/HellsThunder.js");

class HellsThunder extends HellsThunderBase {
  constructor(game) {
    super(game, "Hell's Thunder", "Shards of Alara", "ALA");
  }
}

module.exports = HellsThunder;
