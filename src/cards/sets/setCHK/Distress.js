"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Distress extends UnimplementedCard {
  constructor (game) {
    super(game, "Distress", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Distress;
