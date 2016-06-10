"use strict";
const Constants = require ("../../../Constants");
const TerashisGraspBase = require("../setBOK/TerashisGrasp");

class TerashisGrasp extends TerashisGraspBase {
  constructor (game) {
    super(game, "Terashi's Grasp", "Modern Masters", "MMA");
  }
}

module.exports = TerashisGrasp;
