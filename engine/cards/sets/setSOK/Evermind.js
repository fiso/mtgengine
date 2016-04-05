"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Evermind extends UnimplementedCard {
  constructor(game) {
    super(game, "Evermind", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = Evermind;
