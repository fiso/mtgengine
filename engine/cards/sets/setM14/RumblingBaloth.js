"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RumblingBaloth extends Card {
  constructor(game) {
    super(game, "Rumbling Baloth", "Magic 2014 Core Set", "M14");
  }
}

module.exports = RumblingBaloth;
