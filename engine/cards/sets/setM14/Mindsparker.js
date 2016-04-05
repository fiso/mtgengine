"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindsparker extends UnimplementedCard {
  constructor(game) {
    super(game, "Mindsparker", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Mindsparker;
