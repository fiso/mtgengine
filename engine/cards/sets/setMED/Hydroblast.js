"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HydroblastBase = require("../set5ED/Hydroblast.js");

class Hydroblast extends HydroblastBase {
  constructor(game) {
    super(game, "Hydroblast", "Masters Edition", "MED");
  }
}

module.exports = Hydroblast;
