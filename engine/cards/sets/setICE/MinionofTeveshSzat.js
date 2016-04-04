"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinionofTeveshSzat extends UnimplementedCard {
  constructor(game) {
    super(game, "Minion of Tevesh Szat", "Ice Age", "ICE");
  }
}

module.exports = MinionofTeveshSzat;
