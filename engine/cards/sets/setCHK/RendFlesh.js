"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RendFlesh extends UnimplementedCard {
  constructor(game) {
    super(game, "Rend Flesh", "Champions of Kamigawa", "CHK");
  }
}

module.exports = RendFlesh;
