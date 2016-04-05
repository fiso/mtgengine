"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stormbind extends UnimplementedCard {
  constructor(game) {
    super(game, "Stormbind", "Ice Age", "ICE");
  }
}

module.exports = Stormbind;
