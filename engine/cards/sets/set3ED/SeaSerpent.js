"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeaSerpentBase = require("../setCED/SeaSerpent.js");

class SeaSerpent extends SeaSerpentBase {
  constructor(game) {
    super(game, "Sea Serpent", "Revised Edition", "3ED");
  }
}

module.exports = SeaSerpent;
