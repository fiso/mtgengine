"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LudevicsAbomination extends Card {
  constructor(game) {
    super(game, "Ludevic's Abomination", "Innistrad", "ISD");
  }
}

module.exports = LudevicsAbomination;
