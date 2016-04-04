"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeismicAssault extends Card {
  constructor(game) {
    super(game, "Seismic Assault", "Eighth Edition", "8ED");
  }
}

module.exports = SeismicAssault;
