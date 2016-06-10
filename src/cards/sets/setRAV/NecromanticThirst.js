"use strict";
const Constants = require ("../../../Constants");
const NecromanticThirstBase = require("../setCNS/NecromanticThirst");

class NecromanticThirst extends NecromanticThirstBase {
  constructor (game) {
    super(game, "Necromantic Thirst", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = NecromanticThirst;
