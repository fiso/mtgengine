"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JackintheMox extends Card {
  constructor(game) {
    super(game, "Jack-in-the-Mox", "Unglued", "UGL");
  }
}

module.exports = JackintheMox;
