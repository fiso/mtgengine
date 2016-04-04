"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShisatoWhisperingHunter extends UnimplementedCard {
  constructor(game) {
    super(game, "Shisato, Whispering Hunter", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ShisatoWhisperingHunter;
