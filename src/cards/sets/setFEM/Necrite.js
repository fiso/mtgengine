"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necrite extends UnimplementedCard {
  constructor (game) {
    super(game, "Necrite", "Fallen Empires", "FEM");
  }
}

module.exports = Necrite;
