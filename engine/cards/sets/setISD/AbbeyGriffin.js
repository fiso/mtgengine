"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbbeyGriffin extends Card {
  constructor(game) {
    super(game, "Abbey Griffin", "Innistrad", "ISD");
  }
}

module.exports = AbbeyGriffin;
