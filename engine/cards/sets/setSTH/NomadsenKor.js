"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NomadsenKor extends UnimplementedCard {
  constructor(game) {
    super(game, "Nomads en-Kor", "Stronghold", "STH");
  }
}

module.exports = NomadsenKor;
