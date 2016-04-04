"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlueWard extends Card {
  constructor(game) {
    super(game, "Blue Ward", "Collector's Edition", "CED");
  }
}

module.exports = BlueWard;
