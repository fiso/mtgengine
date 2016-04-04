"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LancersenKor extends Card {
  constructor(game) {
    super(game, "Lancers en-Kor", "Stronghold", "STH");
  }
}

module.exports = LancersenKor;
