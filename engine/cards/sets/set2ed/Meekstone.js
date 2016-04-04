"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MeekstoneBase = require("../set6ED/Meekstone.js");

class Meekstone extends MeekstoneBase {
  constructor(game) {
    super(game, "Meekstone", "Unlimited Edition", "2ED");
  }
}

module.exports = Meekstone;
