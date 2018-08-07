"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KefnetsLastWord extends UnimplementedCard {
  constructor (game) {
    super(game, "Kefnet's Last Word", "Hour of Devastation", "HOU");
  }
}

module.exports = KefnetsLastWord;
