"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimReplica extends UnimplementedCard {
  constructor (game) {
    super(game, "Nim Replica", "Mirrodin", "MRD");
  }
}

module.exports = NimReplica;
