"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LabRats extends Card {
  constructor(game) {
    super(game, "Lab Rats", "Stronghold", "STH");
  }
}

module.exports = LabRats;
