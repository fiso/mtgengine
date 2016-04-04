"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShadowGuildmageBase = require("../setMIR/ShadowGuildmage.js");

class ShadowGuildmage extends ShadowGuildmageBase {
  constructor(game) {
    super(game, "Shadow Guildmage", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = ShadowGuildmage;
