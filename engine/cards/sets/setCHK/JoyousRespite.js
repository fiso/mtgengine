"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JoyousRespite extends Card {
  constructor(game) {
    super(game, "Joyous Respite", "Champions of Kamigawa", "CHK");
  }
}

module.exports = JoyousRespite;
