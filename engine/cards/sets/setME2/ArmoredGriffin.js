"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmoredGriffin extends Card {
  constructor(game) {
    super(game, "Armored Griffin", "Masters Edition II", "ME2");
  }
}

module.exports = ArmoredGriffin;
