"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrosanConstrictor extends Card {
  constructor(game) {
    super(game, "Krosan Constrictor", "Torment", "TOR");
  }
}

module.exports = KrosanConstrictor;
