"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DictateofKarametra extends UnimplementedCard {
  constructor (game) {
    super(game, "Dictate of Karametra", "Journey into Nyx", "JOU");
  }
}

module.exports = DictateofKarametra;
