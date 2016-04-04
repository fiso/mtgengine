"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SylvokReplica extends Card {
  constructor(game) {
    super(game, "Sylvok Replica", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SylvokReplica;
