"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fumarole extends Card {
  constructor(game) {
    super(game, "Fumarole", "Ice Age", "ICE");
  }
}

module.exports = Fumarole;
