"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseofOblivion extends UnimplementedCard {
  constructor (game) {
    super(game, "Curse of Oblivion", "Innistrad", "ISD");
  }
}

module.exports = CurseofOblivion;
