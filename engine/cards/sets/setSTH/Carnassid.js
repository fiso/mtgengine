"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Carnassid extends Card {
  constructor(game) {
    super(game, "Carnassid", "Stronghold", "STH");
  }
}

module.exports = Carnassid;
