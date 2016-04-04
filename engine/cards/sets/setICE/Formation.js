"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Formation extends UnimplementedCard {
  constructor(game) {
    super(game, "Formation", "Ice Age", "ICE");
  }
}

module.exports = Formation;
