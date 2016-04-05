"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scapegoat extends UnimplementedCard {
  constructor(game) {
    super(game, "Scapegoat", "Stronghold", "STH");
  }
}

module.exports = Scapegoat;
