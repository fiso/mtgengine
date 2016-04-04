"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireInterloper extends UnimplementedCard {
  constructor(game) {
    super(game, "Vampire Interloper", "Innistrad", "ISD");
  }
}

module.exports = VampireInterloper;
