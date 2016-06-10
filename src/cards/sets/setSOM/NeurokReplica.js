"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeurokReplica extends UnimplementedCard {
  constructor (game) {
    super(game, "Neurok Replica", "Scars of Mirrodin", "SOM");
  }
}

module.exports = NeurokReplica;
