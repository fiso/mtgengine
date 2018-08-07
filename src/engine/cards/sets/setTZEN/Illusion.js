"use strict";
const Constants = require ("../../../Constants");
const IllusionBase = require("../setTXLN/Illusion");

class Illusion extends IllusionBase {
  constructor (game) {
    super(game, "Illusion", "Zendikar Tokens", "TZEN");
  }
}

module.exports = Illusion;
