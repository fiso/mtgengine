"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NightmareVoidBase = require("../setDDJ/NightmareVoid.js");

class NightmareVoid extends NightmareVoidBase {
  constructor(game) {
    super(game, "Nightmare Void", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = NightmareVoid;
