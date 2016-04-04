"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HauntingEchoesBase = require("../setM10/HauntingEchoes.js");

class HauntingEchoes extends HauntingEchoesBase {
  constructor(game) {
    super(game, "Haunting Echoes", "Odyssey", "ODY");
  }
}

module.exports = HauntingEchoes;
