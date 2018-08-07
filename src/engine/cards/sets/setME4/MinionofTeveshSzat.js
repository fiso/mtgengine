"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinionofTeveshSzat extends UnimplementedCard {
  constructor (game) {
    super(game, "Minion of Tevesh Szat", "Masters Edition IV", "ME4");
  }
}

module.exports = MinionofTeveshSzat;
