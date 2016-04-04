"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoriokReplica extends Card {
  constructor(game) {
    super(game, "Moriok Replica", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MoriokReplica;
