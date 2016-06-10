"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rootrunner extends UnimplementedCard {
  constructor (game) {
    super(game, "Rootrunner", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Rootrunner;
