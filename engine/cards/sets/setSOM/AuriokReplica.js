"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuriokReplica extends Card {
  constructor(game) {
    super(game, "Auriok Replica", "Scars of Mirrodin", "SOM");
  }
}

module.exports = AuriokReplica;
