"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeaSerpentBase = require("../setCED/SeaSerpent.js");

class SeaSerpent extends SeaSerpentBase {
  constructor(game) {
    super(game, "Sea Serpent", "Fifth Edition", "5ED");
  }
}

module.exports = SeaSerpent;
