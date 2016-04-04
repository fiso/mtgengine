"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TempestOwl extends Card {
  constructor(game) {
    super(game, "Tempest Owl", "Zendikar", "ZEN");
  }
}

module.exports = TempestOwl;
