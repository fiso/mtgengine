"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Narwhal extends UnimplementedCard {
  constructor (game) {
    super(game, "Narwhal", "Masters Edition II", "ME2");
  }
}

module.exports = Narwhal;
