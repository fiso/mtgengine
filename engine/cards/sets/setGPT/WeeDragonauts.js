"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WeeDragonautsBase = require("../setpARL/WeeDragonauts.js");

class WeeDragonauts extends WeeDragonautsBase {
  constructor(game) {
    super(game, "Wee Dragonauts", "Guildpact", "GPT");
  }
}

module.exports = WeeDragonauts;
