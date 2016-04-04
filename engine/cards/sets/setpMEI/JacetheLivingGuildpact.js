"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JacetheLivingGuildpactBase = require("../setM15/JacetheLivingGuildpact.js");

class JacetheLivingGuildpact extends JacetheLivingGuildpactBase {
  constructor(game) {
    super(game, "Jace, the Living Guildpact", "Media Inserts", "pMEI");
  }
}

module.exports = JacetheLivingGuildpact;
