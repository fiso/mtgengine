"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChoMannoRevolutionaryBase = require("../setMMQ/ChoMannoRevolutionary.js");

class ChoMannoRevolutionary extends ChoMannoRevolutionaryBase {
  constructor(game) {
    super(game, "Cho-Manno, Revolutionary", "Tenth Edition", "10E");
  }
}

module.exports = ChoMannoRevolutionary;
