"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeurokReplica extends Card {
  constructor(game) {
    super(game, "Neurok Replica", "Scars of Mirrodin", "SOM");
  }
}

module.exports = NeurokReplica;
