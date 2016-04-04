"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChamberofManipulation extends Card {
  constructor(game) {
    super(game, "Chamber of Manipulation", "Odyssey", "ODY");
  }
}

module.exports = ChamberofManipulation;
