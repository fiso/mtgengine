"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DorantheSiegeTower extends UnimplementedCard {
  constructor (game) {
    super(game, "Doran, the Siege Tower", "Champs and States", "pCMP");
  }
}

module.exports = DorantheSiegeTower;
