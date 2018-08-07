"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OldManoftheSea extends UnimplementedCard {
  constructor (game) {
    super(game, "Old Man of the Sea", "Masters Edition III", "ME3");
  }
}

module.exports = OldManoftheSea;
