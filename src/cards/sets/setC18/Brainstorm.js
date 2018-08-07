"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brainstorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Brainstorm", "Commander 2018", "C18");
  }
}

module.exports = Brainstorm;
