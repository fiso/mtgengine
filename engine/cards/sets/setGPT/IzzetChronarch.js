"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IzzetChronarchBase = require("../setDDJ/IzzetChronarch.js");

class IzzetChronarch extends IzzetChronarchBase {
  constructor(game) {
    super(game, "Izzet Chronarch", "Guildpact", "GPT");
  }
}

module.exports = IzzetChronarch;
