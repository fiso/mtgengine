"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Groundbreaker extends Card {
  constructor(game) {
    super(game, "Groundbreaker", "Champs and States", "pCMP");
  }
}

module.exports = Groundbreaker;
