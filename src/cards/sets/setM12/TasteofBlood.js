"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TasteofBlood extends UnimplementedCard {
  constructor (game) {
    super(game, "Taste of Blood", "Magic 2012", "M12");
  }
}

module.exports = TasteofBlood;
