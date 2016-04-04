"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilverWyvern extends Card {
  constructor(game) {
    super(game, "Silver Wyvern", "Stronghold", "STH");
  }
}

module.exports = SilverWyvern;
