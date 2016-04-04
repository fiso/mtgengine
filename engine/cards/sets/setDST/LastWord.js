"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastWord extends UnimplementedCard {
  constructor(game) {
    super(game, "Last Word", "Darksteel", "DST");
  }
}

module.exports = LastWord;
