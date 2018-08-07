"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Stone", "Commander 2018", "C18");
  }
}

module.exports = MindStone;
