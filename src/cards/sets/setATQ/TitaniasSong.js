"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitaniasSong extends UnimplementedCard {
  constructor (game) {
    super(game, "Titania's Song", "Antiquities", "ATQ");
  }
}

module.exports = TitaniasSong;
