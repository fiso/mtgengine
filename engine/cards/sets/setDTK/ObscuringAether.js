"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObscuringAether extends UnimplementedCard {
  constructor(game) {
    super(game, "Obscuring Æther", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ObscuringAether;
