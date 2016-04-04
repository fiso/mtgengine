"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JackalopeHerd extends UnimplementedCard {
  constructor(game) {
    super(game, "Jackalope Herd", "Exodus", "EXO");
  }
}

module.exports = JackalopeHerd;
