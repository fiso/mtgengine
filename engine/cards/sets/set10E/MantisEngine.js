"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MantisEngine extends Card {
  constructor(game) {
    super(game, "Mantis Engine", "Tenth Edition", "10E");
  }
}

module.exports = MantisEngine;
