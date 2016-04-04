"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Battlegrowth extends Card {
  constructor(game) {
    super(game, "Battlegrowth", "Mirrodin", "MRD");
  }
}

module.exports = Battlegrowth;
