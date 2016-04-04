"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HammerofBogardan extends Card {
  constructor(game) {
    super(game, "Hammer of Bogardan", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HammerofBogardan;
