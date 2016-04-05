"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JoyousRespite extends UnimplementedCard {
  constructor(game) {
    super(game, "Joyous Respite", "Champions of Kamigawa", "CHK");
  }
}

module.exports = JoyousRespite;
