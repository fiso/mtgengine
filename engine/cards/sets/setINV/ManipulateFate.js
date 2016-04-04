"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManipulateFate extends UnimplementedCard {
  constructor(game) {
    super(game, "Manipulate Fate", "Invasion", "INV");
  }
}

module.exports = ManipulateFate;
