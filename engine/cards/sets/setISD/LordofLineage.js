"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LordofLineage extends Card {
  constructor(game) {
    super(game, "Lord of Lineage", "Innistrad", "ISD");
  }
}

module.exports = LordofLineage;
