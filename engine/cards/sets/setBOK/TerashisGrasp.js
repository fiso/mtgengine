"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerashisGrasp extends UnimplementedCard {
  constructor(game) {
    super(game, "Terashi's Grasp", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TerashisGrasp;
