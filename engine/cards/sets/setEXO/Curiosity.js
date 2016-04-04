"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CuriosityBase = require("../set8ED/Curiosity.js");

class Curiosity extends CuriosityBase {
  constructor(game) {
    super(game, "Curiosity", "Exodus", "EXO");
  }
}

module.exports = Curiosity;
