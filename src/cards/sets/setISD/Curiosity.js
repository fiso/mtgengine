"use strict";
const Constants = require ("../../../Constants");
const CuriosityBase = require("../setA25/Curiosity");

class Curiosity extends CuriosityBase {
  constructor (game) {
    super(game, "Curiosity", "Innistrad", "ISD");
  }
}

module.exports = Curiosity;
