"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BindingMummy extends UnimplementedCard {
  constructor (game) {
    super(game, "Binding Mummy", "Amonkhet", "AKH");
  }
}

module.exports = BindingMummy;
