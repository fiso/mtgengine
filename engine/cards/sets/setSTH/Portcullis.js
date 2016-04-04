"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Portcullis extends Card {
  constructor(game) {
    super(game, "Portcullis", "Stronghold", "STH");
  }
}

module.exports = Portcullis;
