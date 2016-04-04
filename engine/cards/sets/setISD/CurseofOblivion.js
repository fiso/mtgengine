"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CurseofOblivion extends Card {
  constructor(game) {
    super(game, "Curse of Oblivion", "Innistrad", "ISD");
  }
}

module.exports = CurseofOblivion;
