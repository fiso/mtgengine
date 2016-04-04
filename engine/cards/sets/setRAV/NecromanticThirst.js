"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecromanticThirstBase = require("../setCNS/NecromanticThirst.js");

class NecromanticThirst extends NecromanticThirstBase {
  constructor(game) {
    super(game, "Necromantic Thirst", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = NecromanticThirst;
