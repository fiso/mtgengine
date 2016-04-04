"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShamanenKor extends Card {
  constructor(game) {
    super(game, "Shaman en-Kor", "Stronghold", "STH");
  }
}

module.exports = ShamanenKor;
