"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CallowJushi extends UnimplementedCard {
  constructor (game) {
    super(game, "Callow Jushi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = CallowJushi;
