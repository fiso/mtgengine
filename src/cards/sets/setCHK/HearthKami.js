"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HearthKami extends UnimplementedCard {
  constructor (game) {
    super(game, "Hearth Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HearthKami;
