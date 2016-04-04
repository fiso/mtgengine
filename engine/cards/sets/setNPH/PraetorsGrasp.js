"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PraetorsGrasp extends UnimplementedCard {
  constructor(game) {
    super(game, "Praetor's Grasp", "New Phyrexia", "NPH");
  }
}

module.exports = PraetorsGrasp;
