"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElementalAppeal extends UnimplementedCard {
  constructor(game) {
    super(game, "Elemental Appeal", "Zendikar", "ZEN");
  }
}

module.exports = ElementalAppeal;
