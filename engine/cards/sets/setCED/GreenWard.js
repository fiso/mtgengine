"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreenWard extends Card {
  constructor(game) {
    super(game, "Green Ward", "Collector's Edition", "CED");
  }
}

module.exports = GreenWard;
