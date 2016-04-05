"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BindingGrasp extends UnimplementedCard {
  constructor(game) {
    super(game, "Binding Grasp", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = BindingGrasp;
