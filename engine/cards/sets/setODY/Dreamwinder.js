"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dreamwinder extends Card {
  constructor(game) {
    super(game, "Dreamwinder", "Odyssey", "ODY");
  }
}

module.exports = Dreamwinder;
