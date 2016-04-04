"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagewrightsStone extends Card {
  constructor(game) {
    super(game, "Magewright's Stone", "Dissension", "DIS");
  }
}

module.exports = MagewrightsStone;
