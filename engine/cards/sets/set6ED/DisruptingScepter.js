"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DisruptingScepter extends Card {
  constructor(game) {
    super(game, "Disrupting Scepter", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DisruptingScepter;
