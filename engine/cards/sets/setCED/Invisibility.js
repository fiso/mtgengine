"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Invisibility extends Card {
  constructor(game) {
    super(game, "Invisibility", "Collector's Edition", "CED");
  }
}

module.exports = Invisibility;
