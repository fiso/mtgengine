"use strict";
const Constants = require ("../../../Constants");
const NeurokReplicaBase = require("../setDDU/NeurokReplica");

class NeurokReplica extends NeurokReplicaBase {
  constructor (game) {
    super(game, "Neurok Replica", "Scars of Mirrodin", "SOM");
  }
}

module.exports = NeurokReplica;
