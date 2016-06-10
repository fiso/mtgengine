"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElfReplica extends UnimplementedCard {
  constructor (game) {
    super(game, "Elf Replica", "Mirrodin", "MRD");
  }
}

module.exports = ElfReplica;
