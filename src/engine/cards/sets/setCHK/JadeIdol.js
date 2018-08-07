"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JadeIdol extends UnimplementedCard {
  constructor (game) {
    super(game, "Jade Idol", "Champions of Kamigawa", "CHK");
  }
}

module.exports = JadeIdol;
