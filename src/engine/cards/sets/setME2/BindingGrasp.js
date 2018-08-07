"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BindingGrasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Binding Grasp", "Masters Edition II", "ME2");
  }
}

module.exports = BindingGrasp;
