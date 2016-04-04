"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JackintheMox extends UnimplementedCard {
  constructor(game) {
    super(game, "Jack-in-the-Mox", "Unglued", "UGL");
  }
}

module.exports = JackintheMox;
