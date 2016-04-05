"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanReclamation extends UnimplementedCard {
  constructor(game) {
    super(game, "Krosan Reclamation", "Judgment", "JUD");
  }
}

module.exports = KrosanReclamation;
