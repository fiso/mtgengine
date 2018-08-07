"use strict";
const Constants = require ("../../../Constants");
const ChoMannoRevolutionaryBase = require("../set10E/ChoMannoRevolutionary");

class ChoMannoRevolutionary extends ChoMannoRevolutionaryBase {
  constructor (game) {
    super(game, "Cho-Manno, Revolutionary", "Mercadian Masques", "MMQ");
  }
}

module.exports = ChoMannoRevolutionary;
