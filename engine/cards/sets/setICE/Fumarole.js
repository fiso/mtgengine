"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fumarole extends UnimplementedCard {
  constructor(game) {
    super(game, "Fumarole", "Ice Age", "ICE");
  }
}

module.exports = Fumarole;
