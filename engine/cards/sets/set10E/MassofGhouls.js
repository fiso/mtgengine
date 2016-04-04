"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MassofGhoulsBase = require("../setFUT/MassofGhouls.js");

class MassofGhouls extends MassofGhoulsBase {
  constructor(game) {
    super(game, "Mass of Ghouls", "Tenth Edition", "10E");
  }
}

module.exports = MassofGhouls;
