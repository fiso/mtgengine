"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SupremeExemplar extends Card {
  constructor(game) {
    super(game, "Supreme Exemplar", "Morningtide", "MOR");
  }
}

module.exports = SupremeExemplar;
