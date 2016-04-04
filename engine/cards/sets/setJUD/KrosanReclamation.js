"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrosanReclamation extends Card {
  constructor(game) {
    super(game, "Krosan Reclamation", "Judgment", "JUD");
  }
}

module.exports = KrosanReclamation;
