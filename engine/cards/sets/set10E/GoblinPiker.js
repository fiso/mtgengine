"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinPikerBase = require("../setDPA/GoblinPiker.js");

class GoblinPiker extends GoblinPikerBase {
  constructor(game) {
    super(game, "Goblin Piker", "Tenth Edition", "10E");
  }
}

module.exports = GoblinPiker;
