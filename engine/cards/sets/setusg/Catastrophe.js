"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CatastropheBase = require("../setBRB/Catastrophe.js");

class Catastrophe extends CatastropheBase {
  constructor(game) {
    super(game, "Catastrophe", "Urza's Saga", "USG");
  }
}

module.exports = Catastrophe;
