"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reverence extends UnimplementedCard {
  constructor (game) {
    super(game, "Reverence", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = Reverence;
