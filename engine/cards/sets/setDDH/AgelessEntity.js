"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AgelessEntityBase = require("../setDST/AgelessEntity.js");

class AgelessEntity extends AgelessEntityBase {
  constructor(game) {
    super(game, "Ageless Entity", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = AgelessEntity;
