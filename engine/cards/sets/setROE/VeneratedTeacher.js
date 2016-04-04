"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeneratedTeacher extends Card {
  constructor(game) {
    super(game, "Venerated Teacher", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = VeneratedTeacher;
