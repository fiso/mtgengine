"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DorantheSiegeTower extends Card {
  constructor(game) {
    super(game, "Doran, the Siege Tower", "Champs and States", "pCMP");
  }
}

module.exports = DorantheSiegeTower;
