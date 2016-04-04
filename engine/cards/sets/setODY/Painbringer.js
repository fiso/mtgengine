"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Painbringer extends Card {
  constructor(game) {
    super(game, "Painbringer", "Odyssey", "ODY");
  }
}

module.exports = Painbringer;
