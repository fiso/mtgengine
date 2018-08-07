"use strict";
const Constants = require ("../../../Constants");
const TerashisGraspBase = require("../setMM2/TerashisGrasp");

class TerashisGrasp extends TerashisGraspBase {
  constructor (game) {
    super(game, "Terashi's Grasp", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TerashisGrasp;
