"use strict";
const Constants = require ("../../../Constants");
const InkmothNexusBase = require("../setPWCQ/InkmothNexus");

class InkmothNexus extends InkmothNexusBase {
  constructor (game) {
    super(game, "Inkmoth Nexus", "Mirrodin Besieged", "MBS");
  }
}

module.exports = InkmothNexus;
