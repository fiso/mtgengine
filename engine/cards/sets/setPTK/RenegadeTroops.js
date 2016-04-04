"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RenegadeTroops extends Card {
  constructor(game) {
    super(game, "Renegade Troops", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RenegadeTroops;
