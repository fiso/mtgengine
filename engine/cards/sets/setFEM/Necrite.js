"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Necrite extends Card {
  constructor(game) {
    super(game, "Necrite", "Fallen Empires", "FEM");
  }
}

module.exports = Necrite;
