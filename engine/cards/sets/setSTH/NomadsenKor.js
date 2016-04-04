"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NomadsenKor extends Card {
  constructor(game) {
    super(game, "Nomads en-Kor", "Stronghold", "STH");
  }
}

module.exports = NomadsenKor;
