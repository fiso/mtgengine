"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindStone extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Stone", "Commander 2014", "C14");
  }
}

module.exports = MindStone;
