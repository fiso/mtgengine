"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerashisGrasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Terashi's Grasp", "Modern Masters 2015", "MM2");
  }
}

module.exports = TerashisGrasp;
