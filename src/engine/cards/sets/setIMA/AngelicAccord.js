"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicAccord extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Accord", "Iconic Masters", "IMA");
  }
}

module.exports = AngelicAccord;
