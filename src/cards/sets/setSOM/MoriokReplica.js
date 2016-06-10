"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoriokReplica extends UnimplementedCard {
  constructor (game) {
    super(game, "Moriok Replica", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MoriokReplica;
