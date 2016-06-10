"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicAccord extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Accord", "Magic 2014 Core Set", "M14");
  }
}

module.exports = AngelicAccord;
