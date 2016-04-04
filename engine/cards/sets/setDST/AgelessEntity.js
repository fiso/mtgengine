"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AgelessEntity extends Card {
  constructor(game) {
    super(game, "Ageless Entity", "Darksteel", "DST");
  }
}

module.exports = AgelessEntity;
