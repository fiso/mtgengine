"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DauthiTrapper extends Card {
  constructor(game) {
    super(game, "Dauthi Trapper", "Stronghold", "STH");
  }
}

module.exports = DauthiTrapper;
