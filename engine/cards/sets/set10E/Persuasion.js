"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PersuasionBase = require("../setODY/Persuasion.js");

class Persuasion extends PersuasionBase {
  constructor(game) {
    super(game, "Persuasion", "Tenth Edition", "10E");
  }
}

module.exports = Persuasion;
