"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElfReplica extends Card {
  constructor(game) {
    super(game, "Elf Replica", "Mirrodin", "MRD");
  }
}

module.exports = ElfReplica;
