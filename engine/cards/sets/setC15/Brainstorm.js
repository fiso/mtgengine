"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrainstormBase = require("../setBTD/Brainstorm.js");

class Brainstorm extends BrainstormBase {
  constructor(game) {
    super(game, "Brainstorm", "Commander 2015", "C15");
  }
}

module.exports = Brainstorm;
