"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Deathgrip extends Card {
  constructor(game) {
    super(game, "Deathgrip", "Collector's Edition", "CED");
  }
}

module.exports = Deathgrip;
