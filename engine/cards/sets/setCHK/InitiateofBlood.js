"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InitiateofBlood extends UnimplementedCard {
  constructor(game) {
    super(game, "Initiate of Blood", "Champions of Kamigawa", "CHK");
  }
}

module.exports = InitiateofBlood;
