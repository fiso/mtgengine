"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitaniasSong extends UnimplementedCard {
  constructor (game) {
    super(game, "Titania's Song", "Masters Edition IV", "ME4");
  }
}

module.exports = TitaniasSong;
