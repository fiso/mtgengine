"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CallowJushi extends Card {
  constructor(game) {
    super(game, "Callow Jushi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = CallowJushi;
