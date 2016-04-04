"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TerashisGraspBase = require("../setBOK/TerashisGrasp.js");

class TerashisGrasp extends TerashisGraspBase {
  constructor(game) {
    super(game, "Terashi's Grasp", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = TerashisGrasp;
