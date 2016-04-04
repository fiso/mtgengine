"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwirltheMists extends Card {
  constructor(game) {
    super(game, "Swirl the Mists", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SwirltheMists;
