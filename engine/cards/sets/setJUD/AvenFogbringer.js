"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenFogbringer extends Card {
  constructor(game) {
    super(game, "Aven Fogbringer", "Judgment", "JUD");
  }
}

module.exports = AvenFogbringer;
