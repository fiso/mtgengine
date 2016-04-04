"use strict";
const Constants = require ("../../../Constants");
const IzzetSignetBase = require("../setC15/IzzetSignet");

class IzzetSignet extends IzzetSignetBase {
  constructor(game) {
    super(game, "Izzet Signet", "Guildpact", "GPT");
  }
}

module.exports = IzzetSignet;
