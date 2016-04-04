"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChildofAlara extends Card {
  constructor(game) {
    super(game, "Child of Alara", "Conflux", "CON");
  }
}

module.exports = ChildofAlara;
