"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WolverinePack extends Card {
  constructor(game) {
    super(game, "Wolverine Pack", "Fifth Edition", "5ED");
  }
}

module.exports = WolverinePack;
