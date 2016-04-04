"use strict";
const Constants = require ("../../../Constants");
const ChoMannoRevolutionaryBase = require("../setMMQ/ChoMannoRevolutionary");

class ChoMannoRevolutionary extends ChoMannoRevolutionaryBase {
  constructor(game) {
    super(game, "Cho-Manno, Revolutionary", "Tenth Edition", "10E");
  }
}

module.exports = ChoMannoRevolutionary;
