"use strict";
const Constants = require ("../../../Constants");
const BindingGraspBase = require("../setCST/BindingGrasp");

class BindingGrasp extends BindingGraspBase {
  constructor(game) {
    super(game, "Binding Grasp", "Masters Edition II", "ME2");
  }
}

module.exports = BindingGrasp;
