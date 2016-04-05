"use strict";
const Constants = require ("../../../Constants");
const ShadowGuildmageBase = require("../setMIR/ShadowGuildmage");

class ShadowGuildmage extends ShadowGuildmageBase {
  constructor(game) {
    super(game, "Shadow Guildmage", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = ShadowGuildmage;
