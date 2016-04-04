"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrochiRanger extends Card {
  constructor(game) {
    super(game, "Orochi Ranger", "Champions of Kamigawa", "CHK");
  }
}

module.exports = OrochiRanger;
