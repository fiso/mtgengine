"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordofthePit extends UnimplementedCard {
  constructor (game) {
    super(game, "Lord of the Pit", "Iconic Masters", "IMA");
  }
}

module.exports = LordofthePit;
