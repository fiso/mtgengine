"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagewrightsStone extends UnimplementedCard {
  constructor(game) {
    super(game, "Magewright's Stone", "Dissension", "DIS");
  }
}

module.exports = MagewrightsStone;
