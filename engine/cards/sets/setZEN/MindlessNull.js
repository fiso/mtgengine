"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindlessNull extends UnimplementedCard {
  constructor(game) {
    super(game, "Mindless Null", "Zendikar", "ZEN");
  }
}

module.exports = MindlessNull;
