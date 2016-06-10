"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PullUnder extends UnimplementedCard {
  constructor (game) {
    super(game, "Pull Under", "Champions of Kamigawa", "CHK");
  }
}

module.exports = PullUnder;
