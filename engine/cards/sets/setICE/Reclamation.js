"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reclamation extends UnimplementedCard {
  constructor(game) {
    super(game, "Reclamation", "Ice Age", "ICE");
  }
}

module.exports = Reclamation;
