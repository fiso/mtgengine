"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TerashisGrasp extends Card {
  constructor(game) {
    super(game, "Terashi's Grasp", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TerashisGrasp;
