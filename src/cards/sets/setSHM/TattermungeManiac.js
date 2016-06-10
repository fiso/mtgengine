"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TattermungeManiac extends UnimplementedCard {
  constructor (game) {
    super(game, "Tattermunge Maniac", "Shadowmoor", "SHM");
  }
}

module.exports = TattermungeManiac;
