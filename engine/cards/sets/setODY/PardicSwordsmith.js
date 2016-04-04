"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PardicSwordsmith extends Card {
  constructor(game) {
    super(game, "Pardic Swordsmith", "Odyssey", "ODY");
  }
}

module.exports = PardicSwordsmith;
