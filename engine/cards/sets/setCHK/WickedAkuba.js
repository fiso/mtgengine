"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WickedAkuba extends Card {
  constructor(game) {
    super(game, "Wicked Akuba", "Champions of Kamigawa", "CHK");
  }
}

module.exports = WickedAkuba;
