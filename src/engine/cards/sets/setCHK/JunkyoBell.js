"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JunkyoBell extends UnimplementedCard {
  constructor (game) {
    super(game, "Junkyo Bell", "Champions of Kamigawa", "CHK");
  }
}

module.exports = JunkyoBell;
