"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WickedAkuba extends UnimplementedCard {
  constructor(game) {
    super(game, "Wicked Akuba", "Champions of Kamigawa", "CHK");
  }
}

module.exports = WickedAkuba;
