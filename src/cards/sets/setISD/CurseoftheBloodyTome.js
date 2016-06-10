"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseoftheBloodyTome extends UnimplementedCard {
  constructor (game) {
    super(game, "Curse of the Bloody Tome", "Innistrad", "ISD");
  }
}

module.exports = CurseoftheBloodyTome;
