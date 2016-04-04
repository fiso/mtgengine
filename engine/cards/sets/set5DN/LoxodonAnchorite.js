"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoxodonAnchorite extends Card {
  constructor(game) {
    super(game, "Loxodon Anchorite", "Fifth Dawn", "5DN");
  }
}

module.exports = LoxodonAnchorite;
