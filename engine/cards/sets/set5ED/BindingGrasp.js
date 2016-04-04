"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BindingGraspBase = require("../setCST/BindingGrasp.js");

class BindingGrasp extends BindingGraspBase {
  constructor(game) {
    super(game, "Binding Grasp", "Fifth Edition", "5ED");
  }
}

module.exports = BindingGrasp;
