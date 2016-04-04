"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritenKor extends Card {
  constructor(game) {
    super(game, "Spirit en-Kor", "Stronghold", "STH");
  }
}

module.exports = SpiritenKor;
